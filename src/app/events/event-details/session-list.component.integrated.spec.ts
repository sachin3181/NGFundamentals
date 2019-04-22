import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { } from '../shared/event.model';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { } from '@angular/platform-browser';
import { UpvoteComponent }  from './upvote/upvote.component';
import { DurationPipe } from '../shared';
import { CollapsibleWellComponent } from '../../common';

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;


    beforeEach(async(() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {userName: 'Joe'}
        };
        const mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [

            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            schemas: [

            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have the correct version title', () => {
            component.sessions = [{
                id: 3,
                name: 'session 1',
                presenter: 'Joe',
                duration: 1,
                level: 'beginner',
                abstract: 'abstract',
                voters: ['john', 'bob']
            }];
            component.sortBy = 'name';
            component.filterBy = 'all';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[well-title]').textContent).toContain('session 1');
        });
    });
});
