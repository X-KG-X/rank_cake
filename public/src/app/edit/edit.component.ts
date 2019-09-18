import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edit_data: any;
  id: any;
  error: any;
  constructor( private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
    this.edit_data = { name: '' };
    this.error = '';
   }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params["id"]);
      let obs = this._httpService.get_one_author(params[ 'id' ]);
      obs.subscribe((data)=>{
        console.log('Back from get_one_author', data['info'][0]['name']);
        this.edit_data={name:data['info'][0]['name']};
        this.id = data['info'][0]['_id'];
      })
    })
  }

  edit_author() {
    console.log('In edit_author');
    let obs = this._httpService.update(this.id, this.edit_data);
    obs.subscribe((data) => {
      console.log('Back from update', data );
      if (data['msg'] == 'failure') {
        this.error= data['info']['message']
      } else {
        this.edit_data = { name : '' };
        this._router.navigate(['/authors']);
      }
    });

  }
}
