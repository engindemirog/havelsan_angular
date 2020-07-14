import { LanguageService } from './../../services/language.service';
import { Word } from './../../models/word';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  words:Word[];
  constructor(private languageService:LanguageService) { }

  ngOnInit(): void {
    this.getWords();
  }

  getWords(){
    this.languageService.getWords().subscribe(data=>this.words=data);
  }

}
