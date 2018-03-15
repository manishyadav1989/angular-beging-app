import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// app components
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { BookComponent } from './books/book.component';
import { BookListService } from './book-list.service';

const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },{
        path:'course',
        component:CourseComponent
    },{
        path:'student',
        component:StudentComponent
    },{
        path:'book',
        component:BookComponent
    },{ 
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutesModule{  }

export const AppComponentList = [ 
    AppComponent, 
    HomeComponent, 
    CourseComponent,
    StudentComponent,
    BookComponent 
]
