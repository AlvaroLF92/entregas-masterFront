import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    if (this.users.length === 0) {
      return this.http.get<User[]>(this.apiUrl).pipe(
        catchError((error) => {
          console.error('Error al obtener usuarios:', error);
          return of([]);
        }),
        switchMap((data) => {
          this.users = data;
          return of(this.users);
        })
      );
    } else {
      return of(this.users);
    }
  }

  addUser(newUser: User): Observable<User> {
    const userExists = this.users.some(
      (user) => user.email === newUser.email || user.phone === newUser.phone
    );

    if (userExists) {
      console.warn('Usuario duplicado. No se agregará.');
      return of(newUser);
    }

    const maxId =
      this.users.length > 0
        ? Math.max(...this.users.map((user) => user.id))
        : 0;
    newUser.id = maxId + 1;

    this.users.push(newUser);
    return of(newUser);
  }

  deleteUser(userId: number): Observable<User[]> {
    this.users = this.users.filter((user) => user.id !== userId);
    return of(this.users);
  }

  updateUser(updatedUser: User): Observable<User[]> {
    const index = this.users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
    return of(this.users);
  }
}
