import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';
import {APP_BASE_HREF} from '@angular/common';
import {async, ComponentFixture, inject} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [AppComponent],
          providers :[ActivatedRoute, Router, APP_BASE_HREF]});
    });
    it('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
