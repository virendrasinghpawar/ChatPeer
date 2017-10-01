import { WebAnalyticPage } from './app.po';

describe('web-analytic App', () => {
  let page: WebAnalyticPage;

  beforeEach(() => {
    page = new WebAnalyticPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
