const anime = [
  {
    image:
      "https://i0.wp.com/crfeaturesbiz.wpcomstaging.com/wp-content/uploads/2020/12/20_12_Dr.STONE_S2_SeasonalAssets_2x3.jpg?w=1003&ssl=1",
    synopsis:
      "Plusieurs milliers d'années après un mystérieux phénomène qui a transformé toute l'humanité en pierre, Senku, un lycéen extrêmement intelligent et animé par un esprit scientifique, se réveille. Face à ce monde figé, où toutes les civilisations se sont effondrées, il décide d'utiliser la science pour le reconstruire. Avec l'aide de son ami d'enfance, l'infatigable Taiju Ôki qui s'est lui aussi réveillé, ils vont devoir repartir de zéro. Ainsi commence une incroyable aventure pour se réapproprier des milliers d'années d'histoire de la science, de l'Âge de pierre à leurs jours…",
  },
  {
    image:
      "https://i0.wp.com/crfeaturesbiz.wpcomstaging.com/wp-content/uploads/2020/12/Slime_S2_Seasonal_FR_2x3.png?resize=1024%2C1536&ssl=1",
    synopsis:
      "Satoru, employé de bureau lambda, se fait assassiner par un criminel en pleine rue. Son histoire aurait dû s'arrêter là, mais il se retrouve soudain réincarné dans un autre monde sous la forme d'un Slime, le monstre le plus faible du bestiaire fantastique. Le voilà équipé de deux compétences uniques : « Prédateur », lui permettant de récupérer les aptitudes de ses adversaires, et « Grand Sage », grâce à laquelle il acquiert une compréhension aiguë de son environnement. Mais même muni de ces armes, ses chances de survie semblent cependant limitées...",
  },
  {
    image:
      "https://i1.wp.com/crfeaturesbiz.wpcomstaging.com/wp-content/uploads/2020/12/20_12_CR_ReZero_S2C2_SeasonalAssets_2x3-1-1.png?resize=1024%2C1536&ssl=1",
    synopsis:
      "Subaru Natsuki a basculé dans un monde fantastique où il fait la connaissance d’Émilia, une jeune fille aux longs cheveux d’argent qu’il jure de protéger. Malheureusement, le jeune homme ne résiste pas longtemps en se faisant tuer rapidement. Pourtant, il revient d’entre les morts, un phénomène qui se répète sans cesse, le ramenant toujours à son point de départ. Subaru entame alors un combat perpétuel dans lequel il essaie, peu à peu, de changer le futur...",
  },
  {
    image:
      "https://i2.wp.com/crfeaturesbiz.wpcomstaging.com/wp-content/uploads/2020/12/20_11_CR_Spider_S1_KV2SeasonalAssets_fixed_2x3.png?resize=1024%2C1536&ssl=1",
    synopsis: "Une lycéenne ordinaire se réveille dans un donjon où elle a été transformée en araignée ! Elle va vite apprendre que, pour survivre, il n'y a pas de règles...",
  },
  {
    image:
      "https://i2.wp.com/crfeaturesbiz.wpcomstaging.com/wp-content/uploads/2020/12/TheQuintessentialQuintuplets_S2_2x3.png?resize=1024%2C1536&ssl=1",
    synopsis: "dfjfjfnfjjfrhffggggggggggghf",
  },
  {
    image:
      "https://i0.wp.com/crfeaturesbiz.wpcomstaging.com/wp-content/uploads/2020/12/2x3-2.jpg?w=1003&ssl=1",
    synopsis: "dfjfjfnfjjfrhffggggggggggghf",
  },
  {
    image:
      "https://i2.wp.com/crfeaturesbiz.wpcomstaging.com/wp-content/uploads/2020/12/YRC_056%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%92%E3%82%99%E3%82%B7%E3%82%99%E3%83%A5%E3%82%A2%E3%83%AB%E4%B8%8A%E4%B8%8B_T4.jpg?w=1063&ssl=1",
    synopsis: "dfjfjfnfjjfrhffggggggggggghf",
  },
];

let buttonMoin = document.getElementById("buttonMoin");
let buttonPlus = document.getElementById("buttonPlus");

const carousell = document.getElementById("carousell");
let image = document.getElementsByClassName("image");
let trueImg = document.querySelectorAll("img");
let synopsis = document.getElementById("text");

let e = 0;
let grande = 2;

console.log(25);

for (let i = 0; i < anime.length; i++) {
  const carImage = document.createElement("div");
  carImage.classList.add("image");
  carousell.appendChild(carImage);

  const carChange = document.createElement("img");
  carChange.src = anime[i].image;
  carImage.appendChild(carChange);
}

image[2].style.transform = "scale(1.4)";
synopsis.innerHTML = anime[grande].synopsis;

buttonPlus.addEventListener("click", function () {
  if (grande > 0) {
    e = e + 17;
    grande--;
    console.log(grande);

    for (let i = 0; i < image.length; i++) {
      image[i].style.transform = `translateX(${e}vw)`;
      image[i].style.transition = "all 0.5s ease";
    }
    image[grande].style.transform = ` translateX(${e}vw) scale(1.4)`;
    synopsis.innerHTML = anime[grande].synopsis;
  }
});

buttonMoin.addEventListener("click", function () {
  if (grande < anime.length - 1) {
    e = e - 17;
    grande++;
    console.log(grande);

    for (let i = 0; i < image.length; i++) {
      image[i].style.transform = `translateX(${e}vw)`;
      image[i].style.transition = "all 0.5s ease";
    }
    image[grande].style.transform = `translateX(${e}vw) scale(1.4)`;
    synopsis.innerHTML = anime[grande].synopsis;
  }
});
