import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {
@Output() sendDetail = new EventEmitter();
personnes : Person[];
constructor(
    private cvservice : CvService,
    private embaucheService: EmbaucheService
  ) {}

  ngOnInit(): void {
    this.personnes = this.cvservice.getPersonne();
  }

  detail(personne : Person ){
this.sendDetail.emit(personne);
  }


}

