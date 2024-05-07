import { Injectable, inject } from '@angular/core';
import { Observable, catchError, from, map, of } from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  user,
  signOut,

} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);

  constructor(private router: Router){}

  register(email: string, username: string, password: string): Observable<void>{
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response)=>{
      console.log("Successful Registramtion");
      updateProfile(response.user, {displayName: username})}
    );
    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((res) => {}).catch((err) => {
      console.error("Login error:", err);
      throw err;
    });

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    console.log("LOGOUT");
    return from(promise);
  }


  checkAuthentication(): Observable<boolean> {
    return this.user$.pipe(
      map(user => !!user),
      catchError(error => {
        console.error("Authentication check error:", error);
        return of(false);
      })
    );
  }


  redirectIfNotAuthenticated(): void {
    this.checkAuthentication().subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
    });
  }

}
