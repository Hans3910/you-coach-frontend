import {Component, OnInit} from '@angular/core';
import {Coach} from '../model/Coach';
import {CoachService} from '../services/coach.service';
import {TopicName} from '../model/TopicName';
import {TopicService} from '../services/topic.service';
import {Grades} from '../model/Grades';

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {
  coaches: Coach[] = [];
  topicNames: TopicName[] = [];
  selectedTopic = '';
  selectedGrade: Grades | undefined;
  searchText = '';

  // Would an empty string work? Let's try later

  constructor(private coachService: CoachService, private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.getCoaches();
    this.getTopicNames();
  }

  public getCoaches(): void {
    this.coachService.getAllCoaches().subscribe(coaches => this.coaches = coaches);
  }

  public getTopicNames(): void {
    this.topicService.getAllTopics().subscribe(topicNames => this.topicNames = topicNames);
  }

  // public filterByTopic(): void {
  //   this.coaches.filter(coach => coach.topicOne === this.topicName);
  // }
}
