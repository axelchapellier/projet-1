const anime = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDMlimtRiabMKmEhc69K70C4kPnwnsZcQRPE2mTy7BsX91BQsDGQWPx_DNaCDlDL5lvs&usqp=CAU",
  },
  {
    image:
      "https://comicvine1.cbsistatic.com/uploads/original/11130/111302819/7000449-kurumi%20tokisaki%20fanart%20v2.jpg",
  },
  {
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9ae5127-beaa-494b-803f-0c83b44462a6/ddzvumt-56c721a7-18b2-4362-8d4b-ef2d3995a9ac.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTlhZTUxMjctYmVhYS00OTRiLTgwM2YtMGM4M2I0NDQ2MmE2XC9kZHp2dW10LTU2YzcyMWE3LTE4YjItNDM2Mi04ZDRiLWVmMmQzOTk1YTlhYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gPqzY1jm1OMrPvYE9SUXGvRxbcbEHr5h_zyMLLX__jk",
  },
  {
    image:
      "https://comicvine1.cbsistatic.com/uploads/original/11130/111302819/7000449-kurumi%20tokisaki%20fanart%20v2.jpg",
  },
  {
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9ae5127-beaa-494b-803f-0c83b44462a6/ddzvumt-56c721a7-18b2-4362-8d4b-ef2d3995a9ac.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTlhZTUxMjctYmVhYS00OTRiLTgwM2YtMGM4M2I0NDQ2MmE2XC9kZHp2dW10LTU2YzcyMWE3LTE4YjItNDM2Mi04ZDRiLWVmMmQzOTk1YTlhYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gPqzY1jm1OMrPvYE9SUXGvRxbcbEHr5h_zyMLLX__jk",
  },
  {
    image:
      "https://i.pinimg.com/originals/38/16/f5/3816f5b58629c2ab01c8eb560d65f231.jpg",
  },
];

let image1 = document.getElementById("imgMoinMoin");
let image2 = document.getElementById("imgMoin");
let image3 = document.getElementById("imgPrincipal");
let image4 = document.getElementById("imgPlus");
let image5 = document.getElementById("imgPlusPlus");

let buttonMoin = document.getElementById("buttonMoin");
let buttonPlus = document.getElementById("buttonPlus");

let count = 0;
let count2 = 1;
let count3 = 2;
let count4 = 3;
let count5 = 4;

image1.style.backgroundImage = `url(${anime[count].image})`;
image2.style.backgroundImage = `url(${anime[count2].image})`;
image3.style.backgroundImage = `url(${anime[count3].image})`;
image4.style.backgroundImage = `url(${anime[count4].image})`;
image5.style.backgroundImage = `url(${anime[count5].image})`;

buttonPlus.addEventListener("click", function () {
  if (count < anime.length - 1) {
    count++;
  } else {
    count = 0;
  }

  if (count2 < anime.length - 1) {
    count2++;
  } else {
    count2 = 0;
  }

  if (count3 < anime.length - 1) {
    count3++;
  } else {
    count3 = 0;
  }

  if (count4 < anime.length - 1) {
    count4++;
  } else {
    count4 = 0;
  }

  if (count5 < anime.length - 1) {
    count5++;
  } else {
    count5 = 0;
  }
  image1.style.backgroundImage = `url(${anime[count].image})`;
  image2.style.backgroundImage = `url(${anime[count2].image})`;
  image3.style.backgroundImage = `url(${anime[count3].image})`;
  image4.style.backgroundImage = `url(${anime[count4].image})`;
  image5.style.backgroundImage = `url(${anime[count5].image})`;
});

buttonMoin.addEventListener("click", function () {
  if (count > 0) {
    count--;
  } else {
    count = anime.length - 1;
  }
  if (count2 > 0) {
    count2--;
  } else {
    count2 = anime.length - 1;
  }
  if (count3 > 0) {
    count3--;
  } else {
    count3 = anime.length - 1;
  }
  if (count4 > 0) {
    count4--;
  } else {
    count4 = anime.length - 1;
  }
  if (count5 > 0) {
    count5--;
  } else {
    count5 = anime.length - 1;
  }
  image1.style.backgroundImage = `url(${anime[count].image})`;
  image2.style.backgroundImage = `url(${anime[count2].image})`;
  image3.style.backgroundImage = `url(${anime[count3].image})`;
  image4.style.backgroundImage = `url(${anime[count4].image})`;
  image5.style.backgroundImage = `url(${anime[count5].image})`;
});
