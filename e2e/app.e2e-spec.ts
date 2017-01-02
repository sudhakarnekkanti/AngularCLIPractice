import { AngularCLIPracticePage } from './app.po';

describe('angular-clipractice App', function() {
  let page: AngularCLIPracticePage;

  beforeEach(() => {
    page = new AngularCLIPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
