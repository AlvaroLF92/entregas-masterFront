import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../core/shared/shared.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [CommonModule,SharedModule,FormsModule]
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup; // Usamos '!' para indicar que se inicializa en ngOnInit
  userName$!: Observable<string>; // Usamos '!' para indicar que se inicializa en ngOnInit

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    // Nos suscribimos al observable del nombre de usuario
    this.userName$ = this.authService.userName$;

    // Inicializamos el formulario con el nombre de usuario actual
    this.profileForm = this.fb.group({
      userName: ['', Validators.required]
    });
  }

  // Método para guardar el nuevo nombre de usuario
  onSave(): void {
    if (this.profileForm.valid) {
      const newUserName = this.profileForm.value.userName;
      this.authService.updateUserName(newUserName);  // Actualizamos el nombre de usuario en el servicio
      console.log('Nombre de usuario actualizado');
    }
  }
}
