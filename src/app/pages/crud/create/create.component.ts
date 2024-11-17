
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  createForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
  });

  constructor(private storageService: LocalStorageService,private router:Router) {}

  createItem(): void {
    if (this.createForm.valid) {
      this.storageService.addData(this.createForm.value);
      alert('Item added successfully!');
      this.createForm.reset();
      this.router.navigate(['/crud/read'])
    }
  }
}
