import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  template: `<div><h1>{{pageTitle}}</h1>
           <pm-products></pm-products>
       </div>
       `
})

export class AppComponent {
  pageTitle = 'Acme Explorer';
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title: string = 'Angular: Getting Started';
// }
