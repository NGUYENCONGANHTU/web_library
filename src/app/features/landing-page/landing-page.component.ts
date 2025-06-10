import {Component, inject, OnInit} from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {RouterLink, RouterOutlet} from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import {AuthorResDTO, CategoryResDTO} from './home/interface';
import {HomeService} from './home/home.service';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NzDropDownModule,
    NzButtonComponent,
    NzIconModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  dataCategory: CategoryResDTO[] =[];
  dataAuthor: AuthorResDTO[] =[];


  homeService = inject(HomeService);

  getDataCategory(){
    this.homeService.getAllData2().subscribe(data => {
      this.dataCategory = data;
    })
  }

  getDataAuthors(){
    this.homeService.getAllData3().subscribe(res => {
      this.dataAuthor = res;
    })
  }
  ngOnInit() {
    this.getDataCategory();
    this.getDataAuthors();
  }
}
