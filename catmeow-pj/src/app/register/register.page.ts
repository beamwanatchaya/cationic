import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  email: string;
  password: string;
  confromPassword: string;

  passwordMatch: boolean;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private loadingngCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router,
    
  ) { }

  ngOnInit() {

  }
  async register() {
    if (this.name && this.email && this.password) {
      const loading = await this.loadingngCtrl.create({
        message: 'loading..',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data) => {

        this.afs.collection('user').doc(data.user.uid).set({
          'userId': data.user.uid,
          'name': this.name,
          'email': this.email,
          'createdAt': Date.now()
        });

        data.user.sendEmailVerification();
         
      })
      .then(() => {
        // console.log('success');
        loading.dismiss();
        this.toast('Register success!' , 'success')
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log('success');
        // console.log(error.message);
        this.toast(error.message, 'danger');
      })
    } else {
      // console.log('Please fill the from!');
      this.toast('Please From The Form!', 'danger');
    }
  } // end of register

  checkPassword(){
    if(this.password == this.confromPassword)
    {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  async toast(message , status){
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    });

    toast.present();
  } // end of toast 

}
