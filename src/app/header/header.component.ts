import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
// import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// export class HeaderComponent implements OnInit, OnDestroy {
export class HeaderComponent  {
  // constructor(private authService: AuthService) {}
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  queueIsOpen = true;

  // ngOnInit() {
  //   // this.userIsAuthenticated = this.authService.getIsAuth();
  //   // this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
  //     this.userIsAuthenticated = isAuthenticated;
  //   });
  // }

  // ngOnDestroy() {
  //   this.authListenerSubs.unsubscribe();
  // }

  // onLogout() {
  //   this.authService.logout();
  // }
}
