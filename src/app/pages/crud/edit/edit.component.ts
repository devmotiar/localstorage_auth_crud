
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '../../../services/local-storage.service'; 

@Component({
  selector: 'app-edit',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  itemId: number | null = null; 
  item: any; 

  constructor(
    private route: ActivatedRoute,
    private storageService: LocalStorageService,
    private router:Router
    
  ) {
    this.editForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
    });
  }

  ngOnInit(): void {
   
    this.itemId = +this.route.snapshot.paramMap.get('id')!; 
    const items = this.storageService.getData(); 
    this.item = items[this.itemId]; 

    if (this.item) {
      this.editForm.patchValue({
        name: this.item.name,
        age: this.item.age
      });
    }
  }

  updateItem(): void {
    if (this.editForm.valid && this.itemId !== null) {
      const updatedItem = this.editForm.value;
      this.storageService.updateData(this.itemId, updatedItem); 
      alert('Item updated successfully!');
      this.router.navigate(['/crud/read']);
    }
  }
}
