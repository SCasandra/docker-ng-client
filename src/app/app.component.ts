import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'course-client';
  #httpClient: HttpClient = inject(HttpClient);
  readonly #BASE_URL: string = 'http://localhost:8088/';

  ngOnInit() {
    this.#httpClient.get(this.#BASE_URL, {responseType: 'text'}).subscribe((response) => {
      console.log(response);
    });
  }
}
