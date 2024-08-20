import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule, CommonModule,],
  providers:[UserService,AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private router:Router,private userService: UserService,) {}
  
  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response)=> {
        alert(response.logedUser.email)
        console.log(response.logedUser)
        this.userService.setUser(response.logedUser.email)
        this.router.navigateByUrl('/home')
      }
        ,
      error: (err) => alert("Error al ingresar, " + err)
    });
  }

}
