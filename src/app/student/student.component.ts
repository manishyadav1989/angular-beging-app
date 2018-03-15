import { Component } from '@angular/core';
import { StudentService } from '../student-list.service';

@Component({
    selector: 'student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css'] 
})

export class StudentComponent{
    students: any[];
    constructor(studentList : StudentService){
        this.students = studentList.getStudentList();
    }
}
