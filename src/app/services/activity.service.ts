import { Injectable } from '@angular/core';
import {IActivity } from '../shared/activity.model';
import { SAVED_ACTIVITIES } from '../shared/activities';

@Injectable()
export class ActivityService {

  constructor() { }
  getActivities(): IActivity[] {
    return SAVED_ACTIVITIES.slice(0);
  }
  getTotalActivities(allActivity: IActivity[]){
    return allActivity.length;
  }
  getTotalDistance(allActivity: IActivity[]){
    let totalDistance = 0;
    for (let i = 0; i < allActivity.length; i++){
      totalDistance += allActivity[i].distance;
    }
    return totalDistance;
  }
  getFirstDate(allActivity: IActivity[]){
    let earliestDate = new Date('01/01/9999');
    for (let i = 0; i < allActivity.length; i++){
      var currentDate = allActivity[i].date;
      if (currentDate < earliestDate) {
      earliestDate = currentDate;
      }
    }
    return earliestDate;
  }
}
