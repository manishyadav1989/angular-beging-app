import { Component } from '@angular/core';
import {CourseListService} from './../course-list.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courses: any[];
  constructor(courseList:CourseListService) {
      this.courses = courseList.getCourseList()
   }
}
