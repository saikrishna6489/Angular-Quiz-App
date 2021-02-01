import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public communication:CommunicationService, private router: Router) { }
  ssd = [{name:"sai"},{name:"sai"},{name:"sai"},]
  questionData:any;

  ngOnInit(): void {
    this.questionData = this.communication.questionData;
  }

  increaseId(){
    this.communication.questionId = 2;
    console.log(this.communication.questionId);
    console.log(document.getElementById("option"));
  }

  submitAnswer(name: string){
    this.communication.selectedOptions[this.communication.questionId] = name;
    if (this.communication.questionId==this.questionData.length){
      this.communication.getAnswers().subscribe( 
        data=>{
          let allQuestions = data;
          this.communication.answers = allQuestions[this.communication.selectedQuiz]; 
          console.log(this.communication.answers);
          this.router.navigate(['/reviewAndResult']);
        }
      );
      
    }
    if (this.communication.questionId<this.questionData.length){
      this.communication.questionId++;
    }
    console.log(this.communication.selectedOptions)
  }


}
