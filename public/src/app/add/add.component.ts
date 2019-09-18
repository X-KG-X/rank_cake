import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  add_data: any;
  error: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.add_data = { name: '' }
    this.error = '';
  }

  ngOnInit() {
  }

  new_author(){
    let obs = this._httpService.add_author(this.add_data);
    obs.subscribe((data) => {
      console.log('Back from add_author', data);
      if ( data['msg']=="failure") {
        this.error= data['info']['message']
      }
      else{
        this.add_data = { name: ''};
        this._router.navigate(['/authors']);

      }

    });
  }

}
