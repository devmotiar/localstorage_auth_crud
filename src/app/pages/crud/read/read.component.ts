
import { Component } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  data: any[] = [];

  constructor(private storageService: LocalStorageService) {
    this.data = this.storageService.getData();
  }

  
  deleteItem(index: number): void {
    this.data.splice(index, 1);  

    this.storageService.setData(this.data);
  }
}
