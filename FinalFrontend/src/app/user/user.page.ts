import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss']
})
export class UserPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ username: string; email: string; rol: string; active:boolean}> = [];
  constructor() {
    for (let i = 1; i < 9; i++) {
      this.items.push({
        username: 'user' + i,
        email: 'email' + i,
        rol: 'type'+ 1,
        active: true,
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
