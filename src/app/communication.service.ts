import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  url="http://localhost:3000";

  constructor(private httpClient: HttpClient,) { }

  questionId:number = 1;
  selectedOptions:any={};
  answers:any={};
  questionData:any = [];
  selectedQuiz: string;

  getQuestions(){
    return this.httpClient.get(`${this.url}/questions`);
  }

  getAnswers(){
    return this.httpClient.get(`${this.url}/answers`);
  }

}
