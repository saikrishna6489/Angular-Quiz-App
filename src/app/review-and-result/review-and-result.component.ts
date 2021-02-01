import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-and-result',
  templateUrl: './review-and-result.component.html',
  styleUrls: ['./review-and-result.component.css']
})
export class ReviewAndResultComponent implements OnInit {

  constructor(private communication:CommunicationService, private router: Router) { }

  selectedOptions:any;
  answers:any;
  questionData:any;
  score:number =0;

  ngOnInit(): void {
    this.selectedOptions = this.communication.selectedOptions;
    this.answers = this.communication.answers;
    console.log(this.answers);
    this.questionData = this.communication.questionData;
    this.calculateScore();
  }

  displayAnswer(id, name){
    if(this.answers[id]==name){
      return true;
    } else{
      return false;
    }
  }

  validateAnswer(id, name){
    if(this.selectedOptions[id]==name && this.answers[id]==this.selectedOptions[id]){
      return true;
      console.log("true");
    } else{
      return false;
      console.log("false")
    }
  }

  validateAnswer2(id, name){
    if(this.selectedOptions[id]==name){
      if(this.answers[id]!==this.selectedOptions[id]){
        return true;
      }
    }
  }

  calculateScore(){
    for(let i in this.answers){
      if(this.answers[i]==this.selectedOptions[i]){
        this.score++;
        console.log("score: "+this.score);
      };
      console.log(this.answers[i]);
    }
  }

}
