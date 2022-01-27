import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  get user$() {
    return this.auth.user$;
  }

  get loggedIn() {
    return this.auth.loggedIn;
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void { }
}
