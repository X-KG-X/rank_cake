import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  id: any;
  author: any;
  new_data: any;
  error: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router ) {
    this.id = '';
    this.author = '';
    this.new_data = {quote: ''};
    this.error = '';
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params["id"]);
      let obs = this._httpService.get_one_author(params[ 'id' ]);
      obs.subscribe((data)=>{
        console.log('Back from get_one_author', data['info'][0]);
        this.author = data['info'][0];
        this.id= data['info'][0]['_id']
      })
    })
  }

  new_quote(){
    let obs = this._httpService.add_quote(this.id, this.new_data);
    obs.subscribe((data) =>{
      console.log('Back from add_quote', data);
      if (data['msg']=='failure'){
        this.error= data['info']['message']
      } else {
        this.new_data= {quote: ''};
        this._router.navigate(['/votes/'+this.id]);
      }
    })
  }

}
