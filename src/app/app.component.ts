import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';

/**
 * https://javascript.plainenglish.io/the-new-features-of-angular-v14-851995870f59
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, PersonalComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public personnes: Array<{ nom: string; prenom }> = [
    {
      nom: 'Nom1',
      prenom: 'prenom1',
    },
    {
      nom: 'Nom2',
      prenom: 'prenom2',
    },
  ];

  public onNotificationPersonnes($event: Array<{ nom: string; prenom }>) {
    console.log('PARENT $event : ', $event);
    // TEST 1 et 2 : V(2)
    this.personnes = $event;

    // TEST 4 :
    // this.personnes = $event.slice();
  }
}
