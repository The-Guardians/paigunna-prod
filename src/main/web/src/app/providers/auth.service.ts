import {Injectable} from "@angular/core";
import {AngularFireAuth} from 'angularfire2/auth'
import * as firebase from "firebase/app";
import {Observable} from "rxjs/internal/Observable";
import {current} from "codelyzer/util/syntaxKind";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
    return this.user;
  }

  loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
