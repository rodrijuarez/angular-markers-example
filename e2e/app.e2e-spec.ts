import { MapMarkersTestPage } from './app.po';

describe('map-markers-test App', () => {
  let page: MapMarkersTestPage;

  beforeEach(() => {
    page = new MapMarkersTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
