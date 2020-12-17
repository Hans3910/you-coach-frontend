import {Component, OnInit} from '@angular/core';
import {Coach} from '../model/Coach';
import {CoachService} from '../services/coach.service';

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {
  coaches: Coach[] = [];

  constructor(private coachService: CoachService) {
  }

  ngOnInit(): void {
    this.getCoaches();
  }

  public getCoaches(): void {
    this.coachService.getAllCoaches().subscribe(coaches => this.coaches = coaches);
  }
}
