<template>
  <div class="about">

      <header class="about-header">
          <Navigation />    
      </header>

   <div class="about-text">
        <h1>Vårt kaffe</h1>
        <h4>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</h4>
        <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
        <br>
        <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
        <br>
    
        <div class="about-bottom">
        <img src="../assets/evacortado.svg">
        <h2>Eva Cortado</h2>
        <p>VD & Grundare</p>
    </div>
   
   </div>

    <footer>
        <img class="bottomBg" src="../assets/bottom.svg">
    </footer>

  </div>
</template>


<script>
import Navigation from "../components/Navigation"

export default {
  components:{ 
  Navigation 
  }

}
</script>


<style lang="scss" scoped>
.about {  
  background: #F3E4E1;

    .about-header {
      background-image: url("../assets/top.svg");
      min-height: 200px;
      background-size: 100%;
      background-repeat: no-repeat;
    }
    
    .about-text {
      padding: 2rem;
      color:#2F2926;

            h1 {
            font-size: 42px;
              margin: 0;  
            }   

    .about-bottom {
      text-align: center;
    }  
  }
}

.bottomBg {
     margin-top: 5%;  
     width: 100%;
}
</style>