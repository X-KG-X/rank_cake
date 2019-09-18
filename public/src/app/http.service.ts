import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  get_authors() {
    return this._http.get('/authors');
  }

  add_author(num) {
    return this._http.post('/author', num );
  }

  delete(id) {
    return this._http.delete(`/author/${id}` );
  }

  update(id, num) {
    return this._http.put(`/author/${id}`, num );
  }

  get_one_author(id) {
    return this._http.get(`/author/${id}`);
  }
  add_quote(id, num) {
    return this._http.post(`/author/${id}`, num);
  }

  vote_up(id, q_id){
    return this._http.patch(`/author/${id}/${q_id}`, {});
  }
  vote_down(id, q_id){
    return this._http.put(`/author/${id}/${q_id}`, {});
  }

  delete_quote(id, q_id){
   return this._http.delete(`/author/${id}/${q_id}`);
  }


}
