import { TercerProyectoAngularPage } from './app.po';

describe('tercer-proyecto-angular App', function() {
  let page: TercerProyectoAngularPage;

  beforeEach(() => {
    page = new TercerProyectoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
