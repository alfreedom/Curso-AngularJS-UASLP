import { QuintoProyectoAngularPage } from './app.po';

describe('quinto-proyecto-angular App', function() {
  let page: QuintoProyectoAngularPage;

  beforeEach(() => {
    page = new QuintoProyectoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
