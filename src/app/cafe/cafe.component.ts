import { Component, inject } from '@angular/core';
import { PiesService } from '../pies.service';
import { NgFor, AsyncPipe } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';

@Component({
    selector: 'app-cafe',
    template: `
  <app-hero></app-hero>
  <section class="cafe">
    <h2 i18n="heading|cafe heading@@cafeHeading">What's cooking?</h2>
    <p i18n="subheading|cafe subheading@@cafeSubheading">Enjoy a freshly made pie in our cafe</p>
    <div class="pie-grid">
        <div class="pie-item" *ngFor="let pie of preparing | async">
          <img src={{pie.image}} alt="image of {{pie.name}}" i18n-alt="alt|image description@@cafeImageAlt"/>
          <div class="pie-info">
            <p>{{pie.name}}</p>
            <p i18n="readyMessage|indication of when pie will be ready@@cafePieReady" >
              Ready {pie.timeRemaining, plural, =0 {now} =5 {soon} other {in a while}}
            </p>
          </div>
        </div>
    </div>
  </section>
  `,
    styleUrls: ['./cafe.component.scss'],
    standalone: true,
    imports: [HeroComponent, NgFor, AsyncPipe]
})
export class CafeComponent {
  private pieService = inject(PiesService);
  public preparing = this.pieService.getFresh();
}
