import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  quotes: any;
  id: any;
  author: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router ) {
    this.quotes = [];
    this.id = '';
  }

  ngOnInit() {
    // this._route.params.subscribe((params: Params) => {
    //   console.log(params["id"]);
    //   let obs = this._httpService.get_one_author(params[ 'id' ]);
    //   obs.subscribe((data)=>{
    //     console.log('Back from get_one_author', data['info'][0]['quote']);
    //     this.quotes=data['info'][0]['quote']
    //     this.id = data['info'][0]['_id'];
    //     this.author= data['info'][0]['name'];
    //   })
    // })
    this.get_this_author()
  }
  
  get_this_author(){
    this._route.params.subscribe((params: Params) => {
      console.log(params["id"]);
      let obs = this._httpService.get_one_author(params[ 'id' ]);
      obs.subscribe((data)=>{
        console.log('Back from get_one_author', data['info'][0]['quote']);
        this.quotes=data['info'][0]['quote']
        this.id = data['info'][0]['_id'];
        this.author= data['info'][0]['name'];
      })
    })

  }

  vote_up( q_id ) {
    let obs = this._httpService.vote_up(this.id,q_id)
    obs.subscribe((data)=>{
      console.log('Back from vote_up')
      this.get_this_author()
    });

  }

  vote_down( q_id ) {
    let obs = this._httpService.vote_down(this.id,q_id)
    obs.subscribe((data) => {
      console.log('Back from vote_up');
      this.get_this_author();
    });

  }

  delete_q(q_id) {
      let obs = this._httpService.delete_quote(this.id, q_id)
      obs.subscribe((data) => {
        console.log('Back from delete_quote', data);
        this.get_this_author();
      });
  }

}
