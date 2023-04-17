/*trocar o background da página */
/*function changeBackground(imageUrl) {
  document.body.style.backgroundImage = `url(${imageUrl})`;
}*/
function changeBackground() {
			var images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
			var chosenImage = images[Math.floor(Math.random() * images.length)];
			document.body.style.backgroundImage = "url('" + chosenImage + "')";
		}
/*trocar o background da página */

/* slider da header */
import SlideNav from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl(".custom-controls");
/* slide da header */


/* função para alternar a classe 'responsive' no clique do botão de menu */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

  /* estilo dos botões na parte superior */
.topnav {
  background-color: #333;
  overflow: hidden;
}
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
/* estilo do menu de 3 barras em celulares */
.icon {
  display: none;
}
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}
@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
