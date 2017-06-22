import { SeptimoProyectoAngularConsumoServicioPage } from './app.po';

describe('septimo-proyecto-angular-consumo-servicio App', function() {
  let page: SeptimoProyectoAngularConsumoServicioPage;

  beforeEach(() => {
    page = new SeptimoProyectoAngularConsumoServicioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
