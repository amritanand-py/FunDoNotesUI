import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebar=new EventEmitter<void>()
  ontoggleSidebar(){
    console.log("toggling");
    
    this.toggleSidebar.emit()
  }
}
