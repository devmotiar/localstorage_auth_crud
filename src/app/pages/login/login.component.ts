
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private storageService: LocalStorageService, private router: Router) {}

  login(): void {
    const users = this.storageService.getUsers();
    const user = users.find(
      (u) =>
        u.email === this.loginForm.value.email &&
        u.password === this.loginForm.value.password
    );

    if (user) {
      alert('Login successful!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials.');
    }
  }
}
