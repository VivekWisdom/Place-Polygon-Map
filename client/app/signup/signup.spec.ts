import { TestBed } from '@angular/core/testing';
import { SignUp } from './signup';
describe('Testing Videos component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [SignUp] });
    });
    it('should work', () => {
        let fixture = TestBed.createComponent(SignUp);
        expect(fixture.componentInstance instanceof SignUp).toBe(true, 'should create Videos component');
    });
});
