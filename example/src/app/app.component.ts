import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false
})
export class AppComponent {
  title = 'example';
  constructor() {
  }
Countrydetails: any [] = [
  {
  'country': 'India',
  'people':[
    {
      'name': 'pranav lamkhade'
    },
    {
      'name': 'subodh lamkhade'
    }
   ]
  },
  {
    'country': 'UK',
    'people':[
      {
        'name': 'Gaurav Ghatol'
      },
      {
        'name': 'Avinash Ghatol'
      }
     ]
    },
  ];

Peoples:any[]=[
  {
    'name': 'pranav lamkhade',
    'country': 'India'
  },
  {
    'name': 'subodh lamkhade',
    'country': 'UK'
  },
  {
    'name': 'Gaurav Ghatol',
    'country': 'USA'
  },
  {
    'name': 'Avinash Ghatol',
    'country': 'India'
  },
  {
    'name': 'Mithun kavitkar',
    'country': 'UK'
  },
];

getcolor(country){
  switch(country)
  {
    case 'India':
    return 'green';

    case 'UK':
    return 'blue';

    case 'USA':
    return 'red';
  }
}

users=[
  'abc',
  'mnp',
  'xyz'
];

cols:number=3;
bdr:number=5;

showdata(){
console.log("Event Binding Example"); 
}
show(){
  alert('Hii This is Event Binding Exampl');
}

data:string="Computer Engg";
data1:string="Web Devloper"

employees:any[]=[
{
  code:'emp001',
  name:'pranav',
  salary:'20000',
  DOB:'04/aug/2010'
},
{
  code:'emp002',
  name:'Ashish',
  salary:'10000',
  DOB:'02/sep/2010'
},
{
  code:'emp003',
  name:'salman',
  salary:'40000',
  DOB:'02/jan/2011'
},

];

dob1= new Date(1994,8,22);
salary1:number=65000;

//pipes Example

currentdate=new Date();
mynumber:number=0.15246316458;

//JSON pipes Example

public employees=[{
"id":1, "name":'Rohit Kumar'
},
{
"id":2, "name":'Raju Shree'
},
{
  "id":3, "name":'Amer gayhat'
},
{
  "id":4, "name":'Pranav Lamkhade'
}
];

//Custom pipes Example

emps:any=[
{
code:'001',name:'pranav lamkhade',gender:'male',salary:45000
},
{
  code:'002',name:'Ankita Raut',gender:'female',salary:35000
},
{
  code:'003',name:'Subodh lamkhade',gender:'male',salary:50000
},
{
  code:'004',name:'Rani lokhande',gender:'femail',salary:45000
},
{
  code:'005',name:'shobha patil',gender:'female',salary:55000
},
{
  code:'004',name:'Mayur kamble',gender:'male',salary:56000
},
];

}

