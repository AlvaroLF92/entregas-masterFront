import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
} from '@angular/core';
import { UserService, User } from '../../../core/services/user.service';
import { SharedModule } from '../../../core/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  imports: [SharedModule, CommonModule, FormsModule],
  standalone: true,
})
export class CrudComponent implements OnInit {
  @ViewChild('userForm') userForm!: NgForm;
  @ViewChild('formContainer') formContainer!: ElementRef;

  users: User[] = [];
  selectedUser: User | null = null;
  editMode: boolean = false;
  showDetail: boolean = false;

  newUser: User = { id: 0, name: '', email: '', phone: '' };
  errorMessage: string = '';

  constructor(private userService: UserService, private eRef: ElementRef) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(form: NgForm): void {
    if (!this.newUser.name || !this.newUser.email || !this.newUser.phone) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    this.userService.addUser(this.newUser).subscribe((user) => {
      if (
        !this.users.find(
          (u) => u.email === user.email && u.phone === user.phone
        )
      ) {
        this.users.push(user);
      }

      this.newUser = { id: 0, name: '', email: '', phone: '' };
      this.errorMessage = '';

      setTimeout(() => {
        form.resetForm();
      }, 0);
    });
  }

  deleteUser(userId: number, event: Event): void {
    event.stopPropagation();

    this.userService.deleteUser(userId).subscribe((updatedUsers) => {
      this.users = updatedUsers;
      if (this.selectedUser?.id === userId) {
        this.cancelDetail();
      }
    });
  }

  selectUser(user: User): void {
    if (this.selectedUser?.id !== user.id) {
      this.selectedUser = user;
      this.showDetail = true;
      this.editMode = false;
    }
  }

  editUser(): void {
    this.editMode = true;
  }

  saveUser(): void {
    if (!this.selectedUser) return;

    this.userService.updateUser(this.selectedUser).subscribe((updatedUsers) => {
      this.users = updatedUsers;
      this.editMode = false;
    });
  }

  cancelEdit(): void {
    this.editMode = false;
  }

  cancelDetail(): void {
    this.showDetail = false;
    this.selectedUser = null;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.formContainer) return;
    if (!this.formContainer.nativeElement.contains(event.target)) {
      this.resetTouchedFields();
    }
  }

  resetTouchedFields(): void {
    if (!this.userForm) return;

    Object.keys(this.userForm.controls).forEach((controlName) => {
      const control = this.userForm.controls[controlName];

      if (control.touched) {
        control.markAsUntouched();
      }
    });
  }
}
