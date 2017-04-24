import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from './project.model';
import { AF } from './providers/af';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire, private afService: AF) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/'+ projectId);
  }

  //Project authentication method

  authenticateProject(projectKey) {
    let project;
    this.getProjectById(projectKey).subscribe((data) => {
      project = data;
    })
    if (this.afService.authState) {
      const currentUser = this.afService.authState.uid;
      const projectOwner = project.owner;

      if (currentUser === projectOwner) {
        return true;
      }
    }
  }


}
