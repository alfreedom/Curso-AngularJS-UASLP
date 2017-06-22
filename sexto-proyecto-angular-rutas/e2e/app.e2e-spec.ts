import { SextoProyectoAngularRutasPage } from './app.po';

describe('sexto-proyecto-angular-rutas App', function() {
  let page: SextoProyectoAngularRutasPage;

  beforeEach(() => {
    page = new SextoProyectoAngularRutasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
