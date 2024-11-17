
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  [x: string]: any;
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private storageService: LocalStorageService,private router: Router) {}

  register(): void {
    if (this.registerForm.valid) {
      this.storageService.addUser(this.registerForm.value);
      alert('Registration successful!');
      this.registerForm.reset();
      this.router.navigate(['/login']);
    }
  }
}
