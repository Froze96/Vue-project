<template>
<div class="header">

      <div class="header__logo">
            <div class="header__logo-img">
               <a :href=" logo.url " > <img src="../assets/header__logo.png"> </a>
            </div> 
            <div class="header__logo-title">
              {{ logo.title }}
            </div> 
      </div>
        

      <nav class="navbar">
          <i class="material-icons material-icons--show" v-if="!show" @click = "show = !show">reorder</i>
          <i class="material-icons material-icons--show" v-else="!show" @click = "show = !show">subject</i>  

          <ul class="navbar__list" v-if="show">
            <li class="navbar__list-item" v-for="item in navbarItems" >
                <a   :href=" item.link "    class="navbar__link"> {{ item.name.toUpperCase() }} </a>
            </li>


             <li class="navbar__list-item">
                <button   class="navbar__modal" @click="$emit('showModal')"> ABOUT </button>
            </li> 
          </ul>
        </nav>

    

      <div class="header__buttons">
          <button class="header__buttons-item">{{ headerButtons.login }}</button>
          <button class="header__buttons-item">{{ headerButtons.register }}</button>              
      </div>
 
</div>
   

 
</template>

<script>



export default {
  data () {
    return {     
      logo:{
        url:'https://yandex.ru/',
        title:'Knight Group'
      },
      headerButtons:{
        login: 'Login',
        register: 'Register'
      },

      show: true,      
      windowWidth: 0,          
      navbarItems:[
              {
                name: "home",
                link:  "#"
              },
              {
                name: "projects",
                link:  "https://www.google.ru/"
              },
              {
                name: "blog",
                link: "#",                
              }              
      ],

    }
},

mounted() {
        this.$nextTick(function() {
          window.addEventListener('resize', this.getWindowWidth);  
          //Init
        this.getWindowWidth()  
    })   
  },

  methods: {
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
        this.windowWidth > 800 ? this.show = true : this.show = false;
      }  
  },

  beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);   
  }


      
    
  
}

</script>

<style lang="css" >
  .header{
    display: flex;
    align-items: center;   
    padding: 1.2rem;
    justify-content: space-between;
    height: 5rem;
    background:#0D131C;    
  }

  .header__logo{
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;    
  }

  .header__logo-img img{    
    width: 100px;
  }
  .header__logo-title{    
    font-size: 18px;
    color: #fff;
  }


  .header__navbar{
    display: flex;
    flex: 2 1 auto;    
  }


  .header__buttons{
    display: flex;
    flex: 3 1 auto;
    justify-content: flex-end;

  }
  .header__buttons-item{
    display: flex; 
    margin-left: 1rem;
    width:8rem;
    height: 1.8rem;
    border-radius: .75rem;
    border:none;
    background:  #58E151;
    color: #fff; 
    justify-content: center;   
  }
  .header__buttons-item:hover {
      box-shadow:0px 3px 12px 2px rgba(0,0,0,0.2);
      -webkit-box-shadow:0px 3px 12px 2px rgba(0,0,0,0.2);
      -moz-box-shadow:0px 3px 12px 2px rgba(0,0,0,0.2);
      cursor:pointer;
      transition: all .5s ease;
  }




.navbar{
    display: flex;    
    padding: .5rem; 
    flex:3 1 auto;
  }
  .navbar__list{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;  
    align-items: center;
    flex:auto;    
  }
  .navbar__list-item{
    display: flex;    
    border: 3px solid #963136;
    padding: .5rem 1.2rem;
    border-radius: 20px;
    transition: all 0.5s ease-out;
  }
  .navbar__list-item:hover{
    background: #963136; 
  }

  .navbar__link{
    text-decoration: none;
    color: #fff;
  }
  .navbar__link:hover{
    text-decoration: none;
    color: #fff;
  }
  .navbar__modal{
    color: #fff;
    background:  transparent;
    border:none;
    cursor: pointer;
    outline: none;
  }


  .material-icons{
    font-size: 48px;
    cursor: pointer;    
    color: #fff; 
  }
  .material-icons--show{
    display: none; 
  }










 
  @media screen and (max-width: 815px){
       .header__buttons{
        display:flex;
        flex-direction: column;
        align-items: center;        

       }
       .header__buttons-item{
        margin-left: 0;
        margin-top: .2rem;
       }

      .material-icons{
        display: block;
        }   
      .navbar__list{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex: 1 1 auto;
        justify-content: space-around;
        padding: .5rem 2.7rem;
        top:6.1rem;
        left:18.5%;
        height: 15rem;
        background: #0D131C;
        border-radius: 0 0 10px 10px;
        z-index: 2;

       }
      .navbar__list-item{      
        justify-content: center;    
       }
      
    } 


</style>
