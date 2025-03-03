// body color

var colors=['darksalmon','darkseagreen','darkturquoise','ivory','khaki']

var sum= 0;

document.getElementById('them').addEventListener('click',function(){

    document.body.style.backgroundColor=colors[sum];

    sum=sum+1;

})

const update= document.getElementById('div-part-3');
date.addEventListener('mouseover',function(){

  const olddate= document.getElementById('currentdate');

  const news = new Date();
  const dates= news.toLocaleDateString();
  const makedate= document.createElement('span');
  makedate.innerText=dates;


  olddate.appendChild(makedate);
  document.getElementById('date').style.display='none';
  
})


// ..................... button-1

var number=1;
const complete = document.getElementById('completed-1');


complete.addEventListener('click',function(){

   alert('Board updated successfully');

   const amount1=document.getElementById('amount-1')
   const amountvalue= amount1.innerText;
   const convert1= parseInt(amountvalue);
   let sum1= convert1 - number;
   amount1.innerText= sum1;
   const amount2=document.getElementById('amount-2')
   const amountvalue2= amount2.innerText;
   const convert2=  parseInt(amountvalue2);
   let sum2 = convert2 + number;
   amount2.innerText=sum2;

// ...................

const textstore= document.getElementById('store');

const drive1 = document.createElement('div');


const makesp = document.createElement('span');
makesp.innerText='you can completed this.....';
drive1.appendChild(makesp);
 
const collecttext =document.getElementById('text-1')
const textvalue= collecttext.innerText;
const makeh1 =document.createElement('span');
makeh1.innerText= textvalue;
drive1.appendChild(makeh1);

const now = new Date();
const time= now.toLocaleTimeString();
const maketime = document.createElement('span');
maketime.innerText=time;

drive1.appendChild(maketime);
store.appendChild(drive1);



complete.setAttribute("disabled",true);
complete.style.opacity = '0.5';


})

// ............button2 



var number=1;
const complete2 = document.getElementById('completed-2');


complete2.addEventListener('click',function(){

  alert('Board updated successfully');

   const amount1=document.getElementById('amount-1')
   const amountvalue= amount1.innerText;
   const convert1= parseInt(amountvalue);
   let sum1= convert1 - number;
   amount1.innerText= sum1;
   const amount2=document.getElementById('amount-2')
   const amountvalue2= amount2.innerText;
   const convert2=  parseInt(amountvalue2);
   let sum2 = convert2 + number;
   amount2.innerText=sum2;

// ...................

const textstore= document.getElementById('store');

const drive1 = document.createElement('div');


const makesp = document.createElement('span');
makesp.innerText='you can completed this.....';
drive1.appendChild(makesp);
 
const collecttext =document.getElementById('text-2')
const textvalue= collecttext.innerText;
const makeh1 =document.createElement('span');
makeh1.innerText= textvalue;
drive1.appendChild(makeh1);

const now = new Date();
const time= now.toLocaleTimeString();
const maketime = document.createElement('span');
maketime.innerText=time;

drive1.appendChild(maketime);
store.appendChild(drive1);



complete2.setAttribute("disabled",true);
complete2.style.opacity = '0.5';


})

// .................button-3

var number=1;
const complete3 = document.getElementById('completed-3');


complete3.addEventListener('click',function(){

  alert('Board updated successfully');

   const amount1=document.getElementById('amount-1')
   const amountvalue= amount1.innerText;
   const convert1= parseInt(amountvalue);
   let sum1= convert1 - number;
   amount1.innerText= sum1;
   const amount2=document.getElementById('amount-2')
   const amountvalue2= amount2.innerText;
   const convert2=  parseInt(amountvalue2);
   let sum2 = convert2 + number;
   amount2.innerText=sum2;

// ...................

const textstore= document.getElementById('store');

const drive1 = document.createElement('div');


const makesp = document.createElement('span');
makesp.innerText='you can completed this.....';
drive1.appendChild(makesp);
 
const collecttext =document.getElementById('text-3')
const textvalue= collecttext.innerText;
const makeh1 =document.createElement('span');
makeh1.innerText= textvalue;
drive1.appendChild(makeh1);

const now = new Date();
const time= now.toLocaleTimeString();
const maketime = document.createElement('span');
maketime.innerText=time;

drive1.appendChild(maketime);
store.appendChild(drive1);



complete3.setAttribute("disabled",true);
complete3.style.opacity = '0.5';


})

// ................button-3

var number=1;
const complete4 = document.getElementById('completed-4');


complete4.addEventListener('click',function(){

  alert('Board updated successfully');

   const amount1=document.getElementById('amount-1')
   const amountvalue= amount1.innerText;
   const convert1= parseInt(amountvalue);
   let sum1= convert1 - number;
   amount1.innerText= sum1;
   const amount2=document.getElementById('amount-2')
   const amountvalue2= amount2.innerText;
   const convert2=  parseInt(amountvalue2);
   let sum2 = convert2 + number;
   amount2.innerText=sum2;

// ...................

const textstore= document.getElementById('store');

const drive1 = document.createElement('div');


const makesp = document.createElement('span');
makesp.innerText='you can completed this.....';
drive1.appendChild(makesp);
 
const collecttext =document.getElementById('text-4')
const textvalue= collecttext.innerText;
const makeh1 =document.createElement('span');
makeh1.innerText= textvalue;
drive1.appendChild(makeh1);

const now = new Date();
const time= now.toLocaleTimeString();
const maketime = document.createElement('span');
maketime.innerText=time;

drive1.appendChild(maketime);
store.appendChild(drive1);



complete4.setAttribute("disabled",true);
complete4.style.opacity = '0.5';


})

// .............button-5

var number=1;
const complete5 = document.getElementById('completed-5');


complete5.addEventListener('click',function(){

  alert('Board updated successfully');

   const amount1=document.getElementById('amount-1')
   const amountvalue= amount1.innerText;
   const convert1= parseInt(amountvalue);
   let sum1= convert1 - number;
   amount1.innerText= sum1;
   const amount2=document.getElementById('amount-2')
   const amountvalue2= amount2.innerText;
   const convert2=  parseInt(amountvalue2);
   let sum2 = convert2 + number;
   amount2.innerText=sum2;

// ...................

const textstore= document.getElementById('store');

const drive1 = document.createElement('div');


const makesp = document.createElement('span');
makesp.innerText='you can completed this.....';
drive1.appendChild(makesp);
 
const collecttext =document.getElementById('text-5')
const textvalue= collecttext.innerText;
const makeh1 =document.createElement('span');
makeh1.innerText= textvalue;
drive1.appendChild(makeh1);

const now = new Date();
const time= now.toLocaleTimeString();
const maketime = document.createElement('span');
maketime.innerText=time;

drive1.appendChild(maketime);
store.appendChild(drive1);



complete5.setAttribute("disabled",true);
complete5.style.opacity = '0.5';


})
// ............button-6

var number=1;
const complete6 = document.getElementById('completed-6');


complete6.addEventListener('click',function(){

  alert('Board updated successfully');

   const amount1=document.getElementById('amount-1')
   const amountvalue= amount1.innerText;
   const convert1= parseInt(amountvalue);
   let sum1= convert1 - number;
   amount1.innerText= sum1;
   const amount2=document.getElementById('amount-2')
   const amountvalue2= amount2.innerText;
   const convert2=  parseInt(amountvalue2);
   let sum2 = convert2 + number;
   amount2.innerText=sum2;

// ...................

const textstore= document.getElementById('store');

const drive1 = document.createElement('div');


const makesp = document.createElement('span');
makesp.innerText='you can completed this.....';
drive1.appendChild(makesp);
 
const collecttext =document.getElementById('text-6')
const textvalue= collecttext.innerText;
const makeh1 =document.createElement('span');
makeh1.innerText= textvalue;
drive1.appendChild(makeh1);

const now = new Date();
const time= now.toLocaleTimeString();
const maketime = document.createElement('span');
maketime.innerText=time;

drive1.appendChild(maketime);
store.appendChild(drive1);



complete6.setAttribute("disabled",true);
complete6.style.opacity = '0.5';

if(sum==0){
  alert('congrates!!! you have completed all the current task');
}


})

// ...........claer history part........
const history= document.getElementById('history');

history.addEventListener('click',function(){

  document.getElementById('store').style.display= 'none';
})