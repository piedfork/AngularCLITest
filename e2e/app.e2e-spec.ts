import { BillitPage } from './app.po';

describe('billit App', () => {
  let page: BillitPage;

  beforeEach(() => {
    page = new BillitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
