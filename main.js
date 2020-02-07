   
   document.getElementById('output').style.visibility = "hidden";
   document.getElementById('kmInput').addEventListener('input', function(e)  {
   document.getElementById('output').style.visibility = "visible";
   let km = e.target.value;
   console.log(km); 
   document.getElementById('mtOutput').innerHTML = km*1000;
   document.getElementById('smOutput').innerHTML = km*100000;
   document.getElementById('mlOutput').innerHTML = km*1000000;
   document.getElementById('ydOutput').innerHTML = km*1093,61;
   document.getElementById('ftOutput').innerHTML = km*3280,84;
} )