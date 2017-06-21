import { CuartoProyectoAngularPage } from './app.po';

describe('cuarto-proyecto-angular App', function() {
  let page: CuartoProyectoAngularPage;

  beforeEach(() => {
    page = new CuartoProyectoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
