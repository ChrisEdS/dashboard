import HomePagePo from '@/cypress/e2e/po/pages/home.po';
import PreferencesPagePo from '@/cypress/e2e/po/pages/preferences.po';
import ClusterManagerListPagePo from '@/cypress/e2e/po/pages/cluster-manager/cluster-manager-list.po';
import ClusterManagerImportGenericPagePo from '@/cypress/e2e/po/edit/provisioning.cattle.io.cluster/import/cluster-import.generic.po';

const homePage = new HomePagePo();
const homeClusterList = homePage.list();
const provClusterList = new ClusterManagerListPagePo('local');

describe('Home Page', () => {
  describe('Home Page', () => {
    beforeEach(() => {
      cy.login();

      HomePagePo.goToAndWaitForGet();
    });

    it('Can navigate to What\'s new page', { tags: ['@adminUser', '@standardUser'] }, () => {
    /**
     * Verify changelog banner is hidden after clicking link
     * Verify release notes link is valid github page
     */
      const text: string[] = [];

      homePage.restoreAndWait();

      homePage.whatsNewBannerLink().invoke('text').then((el) => {
        text.push(el);
      });

      homePage.changelog().self().invoke('text').then((el) => {
        expect(el).contains(text[0]);
      });

      homePage.whatsNewBannerLink().invoke('attr', 'href').then((releaseNotesUrl) => {
        cy.request(releaseNotesUrl).then((res) => {
          expect(res.status).equals(200);
        });
      });

      homePage.whatsNewBannerLink().click();
      homePage.changelog().self().should('not.exist');
    });

    it('Can navigate to Preferences page', { tags: ['@adminUser', '@standardUser'] }, () => {
    /**
     * Click link and verify user lands on preferences page
     */
      const prefPage = new PreferencesPagePo();

      homePage.prefPageLink().click();
      prefPage.waitForPage();
      prefPage.checkIsCurrentPage();
      prefPage.title();
    });

    it('Can restore hidden cards', { tags: ['@adminUser', '@standardUser'] }, () => {
    /**
     * Hide home page banners
     * Click the restore link
     * Verify banners display on home page
     */

      homePage.restoreAndWait();

      homePage.bannerGraphic().graphicBanner().should('be.visible');
      homePage.bannerGraphic().graphicBannerCloseButton();
      homePage.bannerGraphic().graphicBanner().should('not.exist');

      homePage.getLoginPageBanner().checkVisible();
      homePage.getLoginPageBanner().closeButton();
      homePage.getLoginPageBanner().checkNotExists();

      homePage.restoreAndWait();

      homePage.bannerGraphic().graphicBanner().should('be.visible');
      homePage.getLoginPageBanner().checkVisible();
    });

    it('Can see that cluster details match those in Cluster Manangement page', { tags: '@adminUser' }, () => {
    /**
     * Get cluster details from the Home page
     * Verify that the cluster details match those on the Cluster Management page
     */

      const clusterDetails: string[] = [];

      homeClusterList.state('local').invoke('text').then((el) => {
        clusterDetails.push(el.trim());
      });

      homeClusterList.name('local').invoke('text').then((el) => {
        clusterDetails.push(el.trim());
      });

      homeClusterList.version('local').invoke('text').then((el) => {
        clusterDetails.push(el.trim());
      });

      homeClusterList.provider('local').invoke('text').then((el) => {
        clusterDetails.push(el.trim());
      });

      provClusterList.goTo();

      provClusterList.list().state('local').should((el) => {
        expect(el).to.include.text(clusterDetails[0]);
      });

      provClusterList.list().name('local').should((el) => {
        expect(el).to.include.text(clusterDetails[1]);
      });

      provClusterList.list().version('local').should((el) => {
        expect(el).to.include.text(clusterDetails[2]);
      });

      provClusterList.list().provider('local').should((el) => {
        expect(el).to.include.text(clusterDetails[3]);
      });
    });

    it('Can use the Manage, Import Existing, and Create buttons', { tags: ['@adminUser', '@standardUser'] }, () => {
    /**
     * Click 'Manage' button and verify user lands on the Cluster Management page
     * Click on the Import Existing button and verify user lands on the cluster creation page in import mode
     * Click on the Create button and verify user lands on the cluster creation page
     */
      const clusterManagerPage = new ClusterManagerListPagePo('_');
      const genericCreateClusterPage = new ClusterManagerImportGenericPagePo('_');

      homePage.manageButton().click();
      clusterManagerPage.waitForPage();

      HomePagePo.goToAndWaitForGet();
      homePage.importExistingButton().click();
      genericCreateClusterPage.waitForPage('mode=import');

      HomePagePo.goToAndWaitForGet();
      homePage.createButton().click();
      genericCreateClusterPage.waitForPage();
    });

    it('Can filter rows in the cluster list', { tags: '@adminUser' }, () => {
    /**
     * Filter rows in the cluster list
     */

      homeClusterList.resourceTable().sortableTable().filter('random text');
      homeClusterList.resourceTable().sortableTable().rowElements().should((el) => {
        expect(el).to.contain.text('There are no rows which match your search query.');
      });

      homeClusterList.resourceTable().sortableTable().filter('local');
      homeClusterList.name('local').should((el) => {
        expect(el).to.contain.text('local');
      });
    });
  });

  describe('Support Links', { testIsolation: 'off', tags: ['@adminUser', '@standardUser'] }, () => {
    // Click the support links and verify user lands on the correct page
    before(() => {
      cy.login();
    });
    beforeEach(() => {
      HomePagePo.goTo();
    });
    it.skip('can click on Docs link', () => {
      homePage.supportLinks().should('have.length', 6);

      // click Docs link -- this test will sometimes fail due to https://github.com/rancher/rancher-docs/issues/727
      // skipping this test until issue is resolved
      homePage.clickSupportLink(0, true);
      cy.origin('https://ranchermanager.docs.rancher.com', () => {
        cy.url().should('include', 'ranchermanager.docs.rancher.com');
      });
    });

    it('can click on Forums link', () => {
    // click Forums link
      HomePagePo.goTo();
      homePage.clickSupportLink(1, true);
      cy.origin('https://forums.rancher.com', () => {
        cy.url().should('include', 'forums.rancher.com/');
      });
    });

    it('can click on Slack link', () => {
    // click Slack link
      HomePagePo.goTo();
      homePage.clickSupportLink(2, true);
      cy.origin('https://slack.rancher.io', () => {
        cy.url().should('include', 'slack.rancher.io/');
      });
    });

    it('can click on File an Issue link', () => {
    // click File an Issue link
      homePage.clickSupportLink(3, true);
      cy.origin('https://github.com', () => {
        cy.url().should('include', 'github.com/login');
      });
    });

    it('can click on Get Started link', () => {
    // click Get Started link
      homePage.clickSupportLink(4);
      cy.url().should('include', 'docs/getting-started');
    });

    it('can click on Commercial Support link', () => {
    // click Commercial Support link
      homePage.clickSupportLink(5);
      cy.url().should('include', '/support');
    });
  });
});
