import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map, Observable, of, tap } from 'rxjs';

import { Router } from '@angular/router';
import { AuthResponse } from '../../models/auth/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7283/api/auth';
  private refreshTokenTimeout : any;

  constructor(private http: HttpClient, private router : Router) {}

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response =>{
        if (response.accessToken && response.refreshToken) {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
          
          this.startRefreshTokenTimer();
        } else {
          console.error('Invalid login response');
        }
      })
    )
  }
  logout():void{
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this.stopRefreshTokenTimer()
    this.router.navigate(['/login'])
  }
  refreshToken(): Observable<AuthResponse> {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (!accessToken || !refreshToken) {
      console.error('Access token or refresh token is null');
      return of(); // Devuelve un observable vacío
    }
  
    const tokenModel = {
      accessToken,
      refreshToken
    };
  
    return this.http.post<AuthResponse>(`${this.apiUrl}/refresh`, tokenModel).pipe(
      map((response: AuthResponse) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.startRefreshTokenTimer();
        return response;
      })
    );
  }

  startRefreshTokenTimer() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('Access token is null');
      return;
    }
  
    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (6 * 1000);
    
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }

  
}