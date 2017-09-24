import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'; // for mapping response
import {AllUserData} from '../../../shared/dao/all-user-data';
import {Http} from '@angular/http';

@Injectable()
export class ThreadsService {

  constructor(private http:Http) { 

  }//end:constructor

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get('/api/threads')
      .map(res => {
        debugger;
        return res.json()
      });
  }//end:loadUserThreads

}//end:ThreadsService
