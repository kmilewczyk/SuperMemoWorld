import {
  APP_BOOTSTRAP_LISTENER,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth-service/auth.service';
import { LoginError } from '@app/shared/models/login-error.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  modalRef?: BsModalRef;
  modalErrorMessage?: string;
  @ViewChild('loginErrorModal') loginErrorModal!: TemplateRef<any>;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    stayLoggedIn: [false],
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const form = this.loginForm.value;
    this.auth.logIn(form.email, form.password, form.stayLoggedIn).subscribe(
      () => {
        this.router.navigate(['products']);
      },
      (error: LoginError) => {
        console.log(error);
        this.modalErrorMessage = error.message;
        this.openModal();
      }
    );
  }

  openModal() {
    this.modalRef = this.modalService.show(this.loginErrorModal);
  }

  valid(prop: AbstractControl) {
    return prop.valid && (prop.dirty || prop.touched);
  }

  invalid(prop: AbstractControl) {
    return prop.invalid && (prop.dirty || prop.touched);
  }
}
