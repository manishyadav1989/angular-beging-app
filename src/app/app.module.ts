import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// add app component 
import { AppComponent } from './app.component';
// app routes Module
import { AppRoutesModule, AppComponentList } from './app-routing.module';
// app services
import { CourseListService } from './course-list.service';
import { BookListService } from './book-list.service';
import { StudentService } from './student-list.service';


@NgModule({
  declarations:AppComponentList,
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [
    CourseListService,
    BookListService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
