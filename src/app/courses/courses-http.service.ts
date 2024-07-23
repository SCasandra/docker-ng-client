import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Course } from "./course.model";

@Injectable({
    providedIn: 'root'
})
export class CoursesHttpService {
    readonly #BASE_URL: string = 'http://localhost:8088/';
    readonly #TOKEN: string = environment.TOKEN ?? '';
    #httpClient: HttpClient = inject(HttpClient);

    addCourse(course: Course): Observable<unknown> {
        const url = this.#BASE_URL + 'api/course';
        const headers = new HttpHeaders().set('Authorization', this.#TOKEN);

        return this.#httpClient.post(url, course, {headers});
    }

    getCourses(): Observable<Course[]> {
        const url = this.#BASE_URL + 'api/courses';
        const headers = new HttpHeaders().set('Authorization', this.#TOKEN);
        
        return this.#httpClient.get<Course[]>(url,{headers}).pipe(tap((response) => console.log(response)));
    }
}