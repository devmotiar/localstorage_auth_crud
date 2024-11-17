import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private userKey = 'users';
  private dataKey = 'data';

  constructor() {}
// For authentication start

  getUsers(): any[] {
    const users = localStorage.getItem(this.userKey);
    return users ? JSON.parse(users) : [];
  }

  setData(data: any[]): void {
    localStorage.setItem(this.userKey, JSON.stringify(data));  

  }
  addUser(user: any): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.userKey, JSON.stringify(users));
  }

  // For authentication end


  // For CRUD Operation Start


  getData(): any[] {
    const data = localStorage.getItem(this.dataKey);
    return data ? JSON.parse(data) : [];
  }

  addData(item: any): void {
    const data = this.getData();
    data.push(item);
    console.log('item',item)
    localStorage.setItem(this.dataKey, JSON.stringify(data));
  }




  updateData(index: number, updatedItem: any): void {
    const data = this.getData();
    data[index] = updatedItem;
    localStorage.setItem(this.dataKey, JSON.stringify(data));
  }

  deleteData(index: number): void {
    const data = this.getData();
    data.splice(index, 1);
    localStorage.setItem(this.dataKey, JSON.stringify(data));
  }
  // For CRUD Operation Start
}
