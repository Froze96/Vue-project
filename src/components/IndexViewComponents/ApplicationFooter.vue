<template>
<div class="footer">
  <div class="footer__container">

     <div class="footer__item">
         <div class="footer__item-header">
             <p>About us</p>

         </div>
         <div class="footer__item-body">
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ratione quod culpa, nostrum magnam voluptate.</p>
         </div>
         <div class="footer__item-socials">
              <a href="#"><img src="../../assets/social/facebook.png" alt=""></a>
              <a href="#"><img src="../../assets/social/instagram.png" alt=""></a>
              <a href="#"><img src="../../assets/social/google-plus.png" alt=""></a>
              <a href="#"><img src="../../assets/social/linkedin.png" alt=""></a>
              <a href="#"><img src="../../assets/social/twitter.png" alt=""></a>
         </div>
     </div>


      <div class="footer__item">
         <div class="footer__item-header">
             <p>Quick lincks</p>
         </div>

         <div class="footer__item-body">
            <ul class="footer__links">
                <li class="footer__links-item"><a href="#"><i class="material-icons material-icons--footer">navigate_next</i>HOME</a></li>
                <li class="footer__links-item"><a href="#"><i class="material-icons material-icons--footer">navigate_next</i>PROJECTS</a></li>
                <li class="footer__links-item"><a href="#"><i class="material-icons material-icons--footer">navigate_next</i>BLOG</a></li>
                <li class="footer__links-item"><a href="#"><i class="material-icons material-icons--footer">navigate_next</i>ABOUT</a></li>
            </ul>
         </div>
     </div>


      <div class="footer__item">
         <div class="footer__item-header">
             <p>Contacts</p>
         </div>

         <div class="footer__item-body">

             <div class="footer__contacts">
                <i class="material-icons material-icons--footer">room</i>
                <p>Sheldon Cooper & Leonard Hofstadter <br>
                Apt 4B 2311 North Los Robles Avenue <br>
                4B 2311   Pasadena <br>
                California 91108
                USA  </p>
             </div>

             <div class="footer__contacts">
                <i class="material-icons material-icons--footer">call</i>
                <p>8-456-343-35-67<br>
                   2-456-345-33-13 </p>
             </div>

             <div class="footer__contacts">
                <i class="material-icons material-icons--footer">alternate_email</i>
                <p>greenkeeper@bk.com
                   naturefond@gmail.com</p>
             </div>

         </div>
    </div>


    <div class="footer__item">
         <div class="footer__item-header">
             <p>Subscribe</p>
         </div>

         <div class="footer__item-body">
             <form  action="#"  method="post">
                  <div class="uk-margin">
                      <div class="footer__form">
                            <input class="uk-input footer__form-input"  type="email" placeholder="Email">

                            <button class="uk-button uk-button-primary footer__form-sendBtn" type="button">
                                  <i class="material-icons ">send</i>
                            </button>
                      </div>
                  </div>
              </form>
         </div>
     </div>


  </div>
</div>

</template>

<script>
  export default {
    name: 'ApplicationFooter'
  }
</script>

<style lang="scss">

  .footer {
    background: #0D131C;

    &__container {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      flex-direction: row;
      max-width: 95%;
      margin:0 auto;
      background:transparent;
      padding: 1.5rem;
      flex-wrap: wrap;
      border-top: 1px solid #fff;
      color:#fff;
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: .5rem;

      &:nth-child(1) {
        flex:3;
      }

      &:nth-child(2) {
        flex:1;
      }

      &:nth-child(3) {
        flex:2;
      }

      &:nth-child(4) {
        flex:2;
      }

      &-header {
        width: 100%;

        & p {
          border-bottom:.5px solid #fff;
          margin:0 0 .5rem;
          padding: 0 0 12px 0;
          font-size: 18px;
          color: #963136;
        }
      }

      &-socials {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & img {
          height: 50px;
          width: auto;
          margin-left: .5rem;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }

    &__links {
      list-style: none;
      padding: 0;

      &-item {
        & a {
          text-decoration: none;
          color: #fff;
          display: flex;
          align-items: center;

          &:hover {
            text-decoration: none;
            color: grey;
          }
        }

        &:not(:first-child) {
          margin-top:1rem;
        }
      }
    }

    &__contacts {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__form {
      display: flex;

      &-input {
        min-width: 120px;
        height: 48px;
      }

      &-sendBtn {
        display: flex;
        align-items: center;

        & i {
          font-size: 30px;
        }
      }
    }
  }

  .material-icons--footer{
    font-size: 33px;
    margin-right:.5rem;
    cursor:  default;
  }
</style>
