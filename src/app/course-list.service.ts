import { Injectable } from '@angular/core';

@Injectable()
export class CourseListService {
    getCourseList(){
        return ["Hindi", "English", "Math", "Science", "Social Science"]; 
    }
}
