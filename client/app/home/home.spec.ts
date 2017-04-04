import { TestBed } from '@angular/core/testing';
import { Home } from './home';
describe('Testing Videos component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [Home] });
    });
    it('should work', () => {
        let fixture = TestBed.createComponent(Home);
        expect(fixture.componentInstance instanceof Home).toBe(true, 'should create Videos component');
    });
});
