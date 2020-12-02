import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
exercises: Exercise[] =[];
  constructor(private trainingservice: TrainingService) { }

  ngOnInit(): void {
    this.exercises = this.trainingservice.getAvialableExercises();
  }
  onStartTraining(form: NgForm){
    this.trainingservice.startExercise(form.value.exercise);
  }
}
