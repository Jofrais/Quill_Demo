import {Component} from '@angular/core';
import {Delta} from "quill";
import BlotFormatter from "quill-blot-formatter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testQuill';

  quillBody: Delta;
  formats = ['align', 'float'];
  quillViewer: any;
  modules = {
    blotFormatter: {
      align: {
        attribute: 'align',
      }
    }
  }
  constructor() {
  }

  log() {
    console.log(this.quillBody);
    console.log(typeof(this.quillBody))
    this.quillViewer = this.quillBody;
  }


}
