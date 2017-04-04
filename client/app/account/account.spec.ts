import { TestBed } from '@angular/core/testing';
import { Account } from './account';
describe('Testing Videos component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [Account] });
    });
    it('should work', () => {
        let fixture = TestBed.createComponent(Account);
        expect(fixture.componentInstance instanceof Account).toBe(true, 'should create Videos component');
    });
});
