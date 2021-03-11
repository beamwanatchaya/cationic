import { Component, OnInit } from '@angular/core';
import { AnimationController, NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { FirebaseService } from '../firebase.service'
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-cat-feed',
  templateUrl: './cat-feed.page.html',
  styleUrls: ['./cat-feed.page.scss'],
})
export class CatFeedPage implements OnInit {

  selectedMousse: number;
  selectedWet: number;
  selectedGrain: number;
  activeVariation: string;
  catname: any;
  gene: any
  image: any
  id: any
  passData: any

  constructor(
    private animatioCntrl: AnimationController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private firebaseservice: FirebaseService,
    private navController: NavController,
    public alertCtrl: AlertController,
  ) {


    const resData = this.activatedRoute.snapshot.paramMap.get('data')
    const resjson = JSON.parse(resData)
    this.passData = resData
    this.catname = resjson['catname']
    this.gene = resjson['gene']
    this.image = resjson['image']
    this.id = resjson['id']

  }

  ngOnInit() {
    this.activeVariation = 'mousse';
    this.activeVariation = 'wet';

  }
  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'grain') {
      this.animatioCntrl.create()
        .addElement(document.querySelector('.food-mousse'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '0.2')
        .play();

      this.animatioCntrl.create()
        .addElement(document.querySelector('.food-wet'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '0.2')
        .play();

      this.animatioCntrl.create() //2
        .addElement(document.querySelector('.food-grain'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '0')
        .play();

    } else {
      this.animatioCntrl.create()
        .addElement(document.querySelector('.food-mousse'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(100px)', 'translateX(0)')
        .fromTo('opacity', '0.2', '0.2')
        .play();

      this.animatioCntrl.create()
        .addElement(document.querySelector('.food-wet'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(100px)', 'translateX(0)')
        .fromTo('opacity', '0.2', '0.2')
        .play();

      this.animatioCntrl.create()
        .addElement(document.querySelector('.food-grain'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(100px)', 'translateX(-100%)')
        .fromTo('opacity', '0', '0')
        .play();


    }
  }

  changeMousse(mousse: number) {
    this.selectedMousse = mousse;
  }

  changeWet(wet: number) {
    this.selectedWet = wet;
  }

  changeGrain(grain: number) {
    this.selectedGrain = grain;
  }


  edit() {
    this.router.navigate(['edit', this.passData])
  }



  async presentAlertDelete(item: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes!!',
          handler: () => {
            this.firebaseservice.delete_cat(this.id).then(() => {
              this.navController.pop()
            })
          }
        }
      ]
    });

    await alert.present();
  }
}
