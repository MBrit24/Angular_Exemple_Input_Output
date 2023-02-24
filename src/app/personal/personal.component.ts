import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class PersonalComponent implements OnInit, OnChanges {
  @Input() public personnes: Array<{ nom: string; prenom }>;
  @Output() public notificationPersonnes: EventEmitter<
    Array<{ nom: string; prenom }>
  > = new EventEmitter<Array<{ nom: string; prenom }>>();

  public count = 3;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ENFANT ngOnChanges');
    if (changes['personnes']) {
      console.log("ENFANT changes['personnes'] : ", changes['personnes']);
    }
  }

  ngOnInit(): void {
    console.log('ENFANT OnInit : ', this.personnes);
  }

  public onClick() {
    console.log('ENFANT AVANT Ajout : ', this.personnes);
    // TEST 1 :
    // this.notificationPersonnes.emit([
    //   {
    //     nom: `Nom${this.count}`,
    //     prenom: `Prenom${this.count}`,
    //   },
    // ]);

    // TEST 2 : V
    this.personnes.push({
      nom: `Nom${this.count}`,
      prenom: `Prenom${this.count}`,
    });
    // this.notificationPersonnes.emit(this.personnes);

    // TEST 3 :
    this.notificationPersonnes.emit(this.personnes.slice());

    console.log('ENFANT Apres Ajout et Emit : ', this.personnes);
  }
}
