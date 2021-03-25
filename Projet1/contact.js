  function validateEmail(email) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
    }
    
    function Verification() {
    let Nom = document.getElementById('idNom').value;
    let Email = document.getElementById('idEmail').value;
    
    if(Nom==''){
    alert('Vous devez compléter votre nom !');
    document.getElementById('idNom').style.backgroundColor="red";
    document.getElementById('idNom').style.color="#FFF";
    
    return false;
    }
    else{
    document.getElementById('idNom').style.backgroundColor="#9C6";
    }
    
    if(Email=='') {
    alert('Vous devez compléter votre adresse email');
    document.getElementById('idEmail').style.backgroundColor="red";
    document.getElementById('idEmail').style.color="#FFF";
    return false;
    }
    
    else{
    document.getElementById('idEmail').style.backgroundColor="#9C6";
    }
    }

let burger = document.getElementsByClassName("burger");
let nav = document.querySelector("nav");
let flou = document.querySelector(".flou");

console.log(burger);
console.log(nav);
console.log(flou);

if (window.matchMedia("(max-width: 840px)").matches) {
  burger[0].addEventListener("click", function () {
    nav.style.transform = "translateX(0px)";
    flou.style.display = "block";
    flou.style.opacity = "0.3";
  });
  flou.addEventListener("click", function () {
    nav.style.transform = "translateX(-30vw)";
    flou.style.display = "none";
    flou.style.opacity = "0";
  });
}
