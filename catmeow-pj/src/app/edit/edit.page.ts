import { Component, OnInit } from '@angular/core';
import { AnimationController, NavController} from '@ionic/angular';
import { FirebaseService } from '../firebase.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  activeVariation: string;
  selectedMousse: number;
  selectedWet: number;
  selectedGrain: number;
  catname: any;
  gene: any
  image: any
  id: any


  constructor(
    private animatioCntrl: AnimationController,
    private firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,

  ) { }

  ngOnInit() {
    this.activeVariation = 'mousse';
    this.activeVariation = 'wet';

    const resData = this.activatedRoute.snapshot.paramMap.get('data')
    const resjson = JSON.parse(resData)
    this.catname = resjson['catname']
    this.gene = resjson['gene']
    this.image = resjson['image']
    this.id = resjson['id']
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
    const tmpCat = {}
    tmpCat['catname'] = this.catname
    tmpCat['gene'] = this.gene
    this.firebaseService.editData(this.id, tmpCat).then(() => {
      this.navController.pop().then(() => {
        this.navController.pop()
      })
    })
  }

}
