import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  data: any[] = []; 

  constructor(private storageService: LocalStorageService) {}

  ngOnInit(): void {
    this.loadData(); 
  }

  loadData(): void {
    this.data = this.storageService.getData(); 
  }
}
