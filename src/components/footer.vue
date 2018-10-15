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
              <a href="#"><img src="../assets/social/facebook.png" alt=""></a>
              <a href="#"><img src="../assets/social/instagram.png" alt=""></a>
              <a href="#"><img src="../assets/social/google-plus.png" alt=""></a>
              <a href="#"><img src="../assets/social/linkedin.png" alt=""></a>
              <a href="#"><img src="../assets/social/twitter.png" alt=""></a>             
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
  data () {
    return { 

     } 

 }
}
</script>

<style lang="css" scoped>

.footer{
  background: #0D131C;
}
.footer__container{ 
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: row;
  max-width: 70%;   
  margin:0 auto;
  background:transparent;
  padding: 1.5rem;
  flex-wrap: wrap;
  border-top: 1px solid #fff;
  color:#fff; 
}
.footer__item{
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  padding: .5rem;
}
.footer__item:nth-child(1){
  flex:3;
}
.footer__item:nth-child(2){
  flex:1;
}
.footer__item:nth-child(3){
  flex:2;
}
.footer__item:nth-child(4){
  flex:2;
}


.footer__item-header p{
  border-bottom:.5px solid #fff;
  margin:0 0 .5rem;
  padding: 0 0 12px 0;
  font-size: 18px;
  color: #963136;
}


.footer__item-socials{
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.footer__item-socials img{
  height: 50px;
  width: auto;
  margin-left: .5rem;
}
.footer__item-socials img:hover{ 
  transform: scale(1.2);
  
}


.footer__links{
  list-style: none;
  padding: 0;  
}
.footer__links-item:not(:first-child){
  margin-top:1rem;
}

.footer__links-item a{
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
}


.footer__links-item a:hover{
  text-decoration: none;
  color: grey;
}



.footer__contacts{
  display: flex;
  flex-direction: row; 
  align-items: center;
}
.material-icons--footer{
  font-size: 33px;
  margin-right:.5rem;
  cursor:  default;
}


.footer__form{
  display: flex;
 
}
.footer__form-input{
  min-width: 120px;
  height: 48px;
}
.footer__form-sendBtn{
   display: flex;
   align-items: center;


}
.footer__form-sendBtn i{
  font-size: 30px;
}




@media screen and (max-width: 815px){
  .footer__item-socials img{
    height: 30px;
    width: auto;
    margin-left: 3px;
}
   
} 
</style>
