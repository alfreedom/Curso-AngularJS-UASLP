import { SegundoProyectoAngularPage } from './app.po';

describe('segundo-proyecto-angular App', function() {
  let page: SegundoProyectoAngularPage;

  beforeEach(() => {
    page = new SegundoProyectoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
