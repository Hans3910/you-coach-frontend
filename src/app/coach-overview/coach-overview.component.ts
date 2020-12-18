import {Component, OnInit} from '@angular/core';
import {Coach} from '../model/Coach';
import {CoachService} from '../services/coach.service';
import {TopicName} from '../model/TopicName';
import {TopicService} from '../services/topic.service';
import {Grades} from '../model/Grades';
import {Topic} from '../model/topic';

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {
  coaches: Coach[] = [];
  topicNames: TopicName[] = [];
  selectedTopic = '';
  selectedGrade = 0;
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


  public isTopicInYear(topic: Topic, year: number): boolean {
    switch (year) {
      case 1:
        return topic.firstGrade;
      case 2:
        return topic.secondGrade;
      case 3:
        return topic.thirdGrade;
      case 4:
        return topic.fourthGrade;
      case 5:
        return topic.fifthGrade;
      case 6:
        return topic.sixthGrade;
      case 7:
        return topic.seventhGrade;
      default:
        return true;
    }
  }
}
