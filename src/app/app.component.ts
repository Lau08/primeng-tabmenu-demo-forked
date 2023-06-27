import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  items: MenuItem[];

  scrollableItems: MenuItem[];

  activeItem: MenuItem;

  activeItem2: MenuItem;
  @ViewChild('menuItems') menu: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    ];

    this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({
      label: `Tab ${i + 1}`,
    }));

    this.activeItem = this.items[0];
    console.log(this.activeItem.label);

    this.activeItem2 = this.scrollableItems[0];
  }

  activateMenu(){
    this.activeItem =this.menu['activeItem'];
 }
}
