import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allQuestions:any;
  allAnswers:any;

  constructor(private communication:CommunicationService, private router: Router) { }

  ngOnInit(): void {
    this.communication.getQuestions().subscribe( 
      data=>{
        this.allQuestions = data;
      }
    );
  }

  selectQuiz(quizname){
    console.log("ssd");
    this.communication.questionData = this.allQuestions[quizname];
    this.communication.selectedQuiz = quizname;
    this.router.navigate(['/quiz']);
  }

}
