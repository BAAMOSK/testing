import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//Used describe to group similar tests
describe('App', () => {

  it('shows the correct text', () => {

    const component = renderComponent(App);
    expect(component).to.contain('React simple starter');

  });

});

//Use it to test a single attribute of a target
//Group a single test -- Unit test
// it('shows the correct text')

//Use expect to make an assertion about a target
// expect