import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    decode:string = '';
    encode:string = '';
    fdecode(){
      this.encode = decodeURI(this.decode)
    }
    fencode(){
      this.decode = encodeURI(this.encode)
    }
}
