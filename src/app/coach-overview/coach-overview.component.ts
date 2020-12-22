import {Component, OnInit} from '@angular/core';
import {Coach} from '../model/Coach';
import {CoachService} from '../services/coach.service';
import {TopicName} from '../model/TopicName';
import {TopicService} from '../services/topic.service';
import {Grades} from '../model/Grades';
import {Topic} from '../model/topic';
import {Router} from '@angular/router';

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
  colorLayout = '#FBC02D';

  // Would an empty string work? Let's try later

  constructor(private coachService: CoachService, private topicService: TopicService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCoaches();
    this.getTopicNames();
    this.setColor();
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

  navigateToCoachDetail(id: string): void {
    console.log(id);
    this.router.navigate([`/coachoverview/${id}`]);
  }

  private setColor(): void {
    if (localStorage.getItem('coachId') !== '') {
      console.log('change of color');
      this.colorLayout = '#80CBC4';
    }
  }
}
