import { helloWorld } from './main';

describe('Hello world', () => {

    let expected = '';

    beforeEach(() => {
        expected = 'Hello world!';
    });

    afterEach(() => {
        expected = '';
    });

    it('It says Hello world', () => {
        expect(helloWorld()).toMatch(expected);
    });

});
