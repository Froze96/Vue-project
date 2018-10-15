<template>


<div class="slider uk-position-relative uk-visible-toggle uk-light" uk-slider="clsActivated: uk-transition-active; center: true; autoplay: true; ">

    <ul class="uk-slider-items  uk-child-width-1-3@m uk-child-width-1-2@s ">


        <li class="slider__item"  v-for="slide in slider">
            <div class="uk-panel">
                <img :src="slide.imgSrc" alt="slider-image"  >
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom" uk-img="target: !.uk-slideshow-items">
                    <h3 class="uk-margin-remove">Bottom</h3>
                    <p class="uk-margin-remove">{{ slide.text }}</p>
                </div>
            </div>
        </li>
       
       

    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover " href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>

</template>

<script>
export default {
  data(){
    return{

        slider:[
            {
                imgSrc:'./src/assets/sliderImages/slider1.jpg',
                text:'Lorem ipsum dolor sit amet.'
            },
            {
                imgSrc:'./src/assets/sliderImages/slider2.jpg',
                text:'Lorem ipsum dolor sit amet.'
            },
            {
                imgSrc:'./src/assets/sliderImages/slider3.jpg',
                text:'Lorem ipsum dolor sit amet.'
            },
            {
                imgSrc:'./src/assets/sliderImages/slider4.jpg',
                text:'Lorem ipsum dolor sit amet.'
            },
            {
                imgSrc:'./src/assets/sliderImages/slider6.jpg',
                text:'Lorem ipsum dolor sit amet.'
            },
            {
                imgSrc:'./src/assets/sliderImages/slider7.jpg',
                text:'Lorem ipsum dolor sit amet.'
            },


        ]
     



      
    }
  }
} 
</script>

<style>
    .slider{
        background: #0D131C;
        height: 70%;
    }
   

</style>