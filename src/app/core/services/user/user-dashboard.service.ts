import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';
import { environment } from '../../../../environments/environment';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  constructor(private master:MasterService) { }
  getAllUser(){
    this.master.get(environment.api+ APIConstant.user.getAllUser)
  }
}
