
function getparam(a,e){return e||(e=window.location.href),new URL(e).searchParams.get(a)}
let s=a=>document.getElementById(a);

function getIdFromUrl(url) { return url.match(/[-\w]{25,}/); }
let apikey = 'AIzaSyD739-eb6NzS_KbVJq1K8ZAxnrMfkIqPyw';

let get=()=>{
  getbase();
}
let getbase=()=>{
    let ply = [];
  
  
    ply.id =  getIdFromUrl(s('videourl').value);
      
   
    console.log(ply);
  
    var arr = JSON.stringify(Object.assign({}, ply))
    console.log(btoa(arr));
    window.base =btoa(arr);
    iframe();
    return btoa(arr);
}


let openfluid=()=> { window.open('https://driveplyr.sh20raj.repl.co/fluid.html?id='+base)}


let pmsg = 'Copy Embed Code' ;
//Player Embedders

let embedfluid=()=> {
  prompt(pmsg,`<iframe width="560" height="315" 
scrolling="no"
src="https://driveplyr.sh20raj.repl.co/fluid.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}


let iframe=()=> {
    s('fluid').src='https://driveplyr.sh20raj.repl.co/fluid.html?id='+base;
  
  }