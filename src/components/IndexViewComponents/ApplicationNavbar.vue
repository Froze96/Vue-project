<template>
  <div class="application__navbar">

    <div class="application__navbar__logo">
      <a :href="logo.url">
        <img
          class="application__navbar__logo-image"
          src="../../assets/header__logo.png">
      </a>
    </div>

    <div class="application__navbar__brand">
      <div class="application__navbar__brand-title">
        {{ logo.title }}
      </div>
    </div>

    <nav class="application__navbar__nav">
      <div class="appliacation__navbar__nav__toggles">
        <i class="material-icons application__navbar__nav__toggler" v-if="!show" @click = "show = !show">reorder</i>
        <i class="material-icons application__navbar__nav__toggler" v-else="!show" @click = "show = !show">subject</i>
      </div>      
      <ul class="application__navbar__nav__items" v-if="show">
        <li
          class="application__navbar__nav__item"
          v-for="(item, index) in navbarItems"
          :key="index">
            <a
              :href="item.link"
              class="application__navbar__nav__item-link">
              {{ item.name.toUpperCase() }}
            </a>
        </li>
      </ul>
    </nav>

    <div class="application__navbar__actions">
      <div class="application__navbar__action application__navbar__action--login">
        <a class="application__navbar__action-link">
          {{ headerButtons.login }}
        </a>
      </div>
      <div class="application__navbar__action application__navbar__action--register">
        <a class="application__navbar__action-link">
          {{ headerButtons.register }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApplicationNavbar',
    data () {
      return {  
        show: true,      
        windowWidth: 0, 
        logo: {
          url: 'https://yandex.ru/',
          title: 'Knight Group'
        },
        headerButtons: {
          login: 'Login',
          register: 'Register'
        },
        navbarItems: [
          {
            name: "Home",
            link:  "#"
          },
          {
            name: "Projects",
            link:  "https://www.google.ru/"
          },
          {
            name: "Blog",
            link: "#",
          },
          {
            name: "About",
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

<style lang="scss">
  .application__navbar {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 4rem;
    background:#0D131C;
    height: 66px;

    &__logo {
      display: flex;
      align-items: center;
      flex-shrink: 0;


      &-image {
        width: 60px;
        height: auto;
        object-fit: contain;
        padding: .75rem 0;
      }
    }

    &__brand {
      display: flex;
      align-items: stretch;
      justify-content: center;
      margin-left: .75rem;

      &-title{
        font-size: 1.35rem;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }

    &__nav {
      display: flex;
      flex-direction: row;
      flex: 1;
      padding: 0 3rem;
      align-items: stretch;

      &__toggles{
          display:flex;       
          align-items:center;                   
      }

      &__toggler{
      display:none;              
      } 

      &__items {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        flex: 1;
        padding: 0;
        margin: 0;
      }

      &__item {
        display: flex;
        align-items: stretch;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 5px;
          background: #963136;
          left: 0;
          bottom: 0;
        }

        &-link {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 10rem;
          padding-bottom: 1.175rem;
          text-decoration: none;
          color: #fff;
          font-size: .9rem;
          font-weight: 300;
          transition: all 0.1s ease-in;

          &:hover{
            font-size: 1rem;
            font-weight: 500;
            background: #963136;
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }

    &__actions{
      display: flex;
      flex-shrink: 1;
      justify-content: flex-end;
      align-items: stretch;
    }

    &__action {
      display: flex;
      align-items: stretch;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background: #263244;
        left: 0;
        bottom: 0;
      }

      &-link {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 8rem;
        padding-bottom: 1.175rem;
        text-decoration: none;
        color: #fff;
        font-size: .9rem;
        font-weight: 300;
        text-transform: uppercase;
        transition: all 0.1s ease-in;
        cursor: pointer;

        &:hover{
          background: #263244;
          font-size: 1rem;
          font-weight: 500;
          color: #fff;
          text-decoration: none;          
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .application__navbar {
      height:80px;

      &__logo-image{
        width:85px;
      }

      &__nav{
        padding: 0 .5rem;


        &__item-link{
          width:9rem;
          padding-bottom:1.85rem;
        }
      }

      .application__navbar__action-link{
        padding-bottom:1.85rem;
        width: 7rem;
      }      
    }
  
  }
  @media screen and (max-width: 1080px) {
    .application__navbar {
      

      &__nav__item-link{
        width:7rem;          
      }     
    }
  }

  @media screen and (max-width: 950px) {
    .application__navbar {
      padding:0 1.5rem;

      &__nav{
        align-items: center;
        padding-left: 1.2rem;

        &__toggles{
          display:flex;

        }

        &__toggler{
          display:flex;
          align-items:center;        
          color:#fff;
          font-size:44px;          
          cursor:pointer;
        } 

        &__items {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 80px;
          left: 0;
          background: #0D131C;
          opacity: .9;
          z-index: 5;  
          width: 100%; 
        }

        &__item{
          width: 100%;
          justify-content: center;

          &-link{
            width: 100%;
            padding: 1.5rem 0 1.5rem 0;
          }

        } 
      }      
    }
  }

  @media screen and (max-width: 600px) {
    .application__navbar {
      height:120px;
      padding: 0;

      &__logo-image{
        width:85px;
      }

      &__nav{
        padding: 0 .5rem;

         &__items {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 120px;
          left: 0;
                    
        }

        &__item-link{
          width:9rem;
          padding-bottom:1.85rem;
        }
      }

      .application__navbar__actions{
        flex-direction: column;
        justify-content: center;
         
      } 
      .application__navbar__action{

        &-link{
          width: 5rem;
          padding: 1rem 0 .5rem;
        }
      }     
    }  
  }

    @media screen and (max-width: 450px) {
    .application__navbar__brand-title {
      font-size:18px;
     

      
    }
  
  }
</style>
