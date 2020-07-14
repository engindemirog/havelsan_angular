import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  path:string="http://localhost:3000/words"
  constructor(private httpClient:HttpClient) { }

  getWords(){
    return this.httpClient.get<Word[]>(this.path);
  }
}
