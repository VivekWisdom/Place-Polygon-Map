import { TestBed } from '@angular/core/testing';
import { Login } from './login';
describe('Testing Login component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [Login] });
    });
    it('should work', () => {
        let fixture = TestBed.createComponent(Login);
        expect(fixture.componentInstance instanceof Login).toBe(true, 'should create Login component');
    });
});
