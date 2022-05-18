let r = document.querySelector('#mm')
let u = document.querySelector('#l')
let p = document.querySelector('#j')
let i = document.querySelector('#mn')
let t = document.querySelector('#nm')
let h= document.querySelector('#h')

r.addEventListener("mouseenter" , e)
r.addEventListener("mouseleave" , l)
function e(){
r.innerHTML = "a"

r.style.color='red';
r.style.backgroundColor='green'

}
function l(){
    r.innerHTML = "a"
    r.style.color='black';  
    r.style.backgroundColor='white'
    
}
  fetch("https://api.ipify.org/")  

    .then( r => r.text() )                  // requesting the text from the fetch response
    .then( ip => {                         // this is the "security" function
      console.info(`Your IP is ${ip}.` );  // Just a Info message in the console to see if the IP is returned
      if(ip === "185.218.3.93"){  // I had to enter a valid IPv4 IP(even if it is only local)
         u.style.display="none"
         let r = "soory"
         p.innerHTML = r
         p.style.color = 'red'

         t.innerHTML = "IRAN"
         h.src = 'data:image/png;base64,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'
         setTimeout(function(){
          window.location.reload(1);
       }, 5000);
      }
      if ( ip === "89.187.162.183"){
        u.style.display="none"

             h.src = 'data:image/png;base64,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'
             setTimeout(function(){
              window.location.reload(1);
           }, 1000);



      }
});
    function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = bb.jpj;
        img.width = 200 ;
        img.height = 200;
        img.alt = a;
    
        document.body.appendChild(img);
    }
