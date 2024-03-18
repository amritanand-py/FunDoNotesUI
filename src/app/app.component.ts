import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FunDoNotesUI';

  isSidebarOpen : boolean =false;
  toggleSidebar(){
    this.isSidebarOpen=!this.isSidebarOpen;
  }


  
}
