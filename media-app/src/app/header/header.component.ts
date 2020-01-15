import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;
  loginState: boolean = false;
  userObj = {};
  isValid:boolean=false;
  constructor(private userService: UserDataService, private modalService: BsModalService, private router:Router, private route:ActivatedRoute) {

  }

  ngOnInit() {
   this.userObj=this.userService.checkIfExists();
   if(this.userObj !== undefined)
   this.loginState=true;
  }

  //open login modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  //login if vaid username and password
  login(form) {
    this.userObj=this.userService.checkIfExists(form);
    if (this.userObj !== undefined) {
      this.loginState = this.userService.setLocalStorage(form);
      this.modalRef.hide();
      if(this.isValid)
      this.isValid=false;
    }
    else{
      this.isValid=true;
    }
  }

  
  signOut(){
    this.userService.clearLocalStorage();
    this.loginState=false;
    this.router.navigate(['./'], {relativeTo:this.route});
    this.userObj={};
    }

 


}
