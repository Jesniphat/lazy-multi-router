import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

}
