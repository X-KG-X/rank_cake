import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: any;
  constructor(private _httpService: HttpService) {
    this.authors = [];
    this.get_all();
  }
  ngOnInit() {
  }

  get_all() {
    let obs = this._httpService.get_authors();
    obs.subscribe((data)=>{
      console.log( 'Back from get_authors' );
      this.authors=data['info']
    });
  }

}
