import { TuxinSkeletonAngular2FrontendPage } from './app.po';

describe('tuxin-skeleton-angular2-frontend App', function() {
  let page: TuxinSkeletonAngular2FrontendPage;

  beforeEach(() => {
    page = new TuxinSkeletonAngular2FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
