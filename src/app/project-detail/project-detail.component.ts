import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  public projectId: string;
  public projectToDisplay: any;
  public projectNeeds: any[] = []
  public userIsOwner = false;
  public startEditing = false;
  public showAddNeed = false;
  public class: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {

      setTimeout(() => {
        this.projectToDisplay = new Project(
          dataLastEmittedFromObserver.title,
          dataLastEmittedFromObserver.image,
          dataLastEmittedFromObserver.description
        )
      }, 1);
    });
      this.class = "header" + this.projectId;
  }

}
