<template>
<div class="form">
    <form v-show="!showSubmitFeedback && !showSpinner"  action="#"  method="post">
        <fieldset class="uk-fieldset">


            <div class="uk-margin">
                <div class="form__row ">
                    <label for="userName">Input your name </label>
                    <label class="form__error"   for="userName" v-show="nameCheck && !beforeClick" >*empty field</label>
                </div>
                <input class="uk-input"  type="text" name="userName" placeholder="Name" v-model="form.userName">
            </div>


             <div class="uk-margin ">
                <div class="form__row ">
                     <label for="email">Input your e-mail </label>
                     <label class="form__error" for="userName" v-show="emailCheck && !beforeClick">*incorrect e-mail</label>
                </div>
                <input  class="uk-input" :class="{'uk-form-danger': !form.userEmail.valid && !beforeClick}"  name='email' type='email' placeholder="E-mail" required="" v-model="form.userEmail.value">
            </div>


            <div class="uk-margin">
                <div class="form__row ">
                    <label for="category">Select a category </label>
                    <label class="form__error" for="userName" v-show="selectCheck && !beforeClick">*category must be selected</label>
                </div>
                <select class="uk-select" name="category" v-model="form.category">
                    <option v-for="category in categories" :value="category">{{ category }}</option>
                </select>
            </div>


            <div class="uk-margin">
                <div class="form__row ">
                    <label for="textarea">Review message</label>
                    <span class="uk-label " :class="{form__error: textareaCheck}">{{ form.textarea.text.length }} / {{ form.textarea.maxlength }}</span>
                </div>
                <textarea class="uk-textarea" name="textarea" rows="5" placeholder="Review" v-model="form.textarea.text"></textarea>

            </div>


            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <div class="form__row ">
                    <label><input class="uk-checkbox" type="checkbox" v-model="form.checkAgree"> I agree to the processing of personal data</label>
                    <label class="form__error" for="userName" v-show="policyCheck && !beforeClick">*allow processing</label>
                </div>
            </div>



            <div class="form__actions">
                 <button class="uk-button uk-button-primary form__action" type="submit" @click.prevent="Submit">
                   Send
                 </button>
            </div>

        </fieldset>
    </form>


    <div class="form__spinner" v-if="showSpinner">
        <span uk-spinner="ratio: 4.5"></span>
    </div>



    <transition name="fade" mode="out-in">
        <article class="form__status" v-show="showSubmitFeedback && !showSpinner">
                  <div class="form__status-header">
                        <p>Send Status:</p>
                  </div>

                  <div class="form__status-logo" v-show="response!=''"><img src="../assets/done.svg" alt="done"></div>
                  <div class="form__status-logo"v-show="responseError!=''"><img src="../assets/failed.svg" alt="done"></div>

                  <div class="form__status-body">{{ response }} {{ responseError }}</div>
        </article>
    </transition>

</div>


</template>

<script>
var goodResponse = "Your feedback has been sent";  //for checking
var badResponse = "Server connection error";       ///

export default {
  data(){
    return{
      categories:["protection of the aquatic environment","forest protection","ecological housing","animal care"],
      errorCounter:[],
      showSpinner:false,
      beforeClick:true,

      form: {
          userName: '',
          userEmail: {
            value:'',
            valid: true
          },
          category: '',
          textarea: {
             text:'',
             maxlength: 500
          },
          checkAgree: false
      },

      showSubmitFeedback: false,
      response: '',
      responseError: ''
    }
  },
  computed:{
                //методы проверки полей- выполняют отображение всплывающей подсказки и контроль счетчика ошибок

      nameCheck(){
        return this.form.userName == '' ? ( this.errorCounter[0]=true,  true): (this.errorCounter[0]=false, false);
      },
      emailCheck(){
        return !this.emailValidation("email",this.form.userEmail.value) ? ( this.errorCounter[1]=true, true) : (this.errorCounter[1]=false, false)
      },
      selectCheck(){
        return this.form.category == '' ? ( this.errorCounter[2]=true,  true): (this.errorCounter[2]=false, false);
      },
      policyCheck(){
        return !this.form.checkAgree   ? (this.errorCounter[3]=true,   true): (this.errorCounter[3]=false, false);
      },
      textareaCheck(){
        return this.form.textarea.text.length > this.form.textarea.maxlength ? (this.errorCounter[4]=true,  true) : (this.errorCounter[4]=false,false);
      },

  },
  methods: {
    isEmail(email){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    ////submit to server
    Submit(){
     this.errCheck(this.errorCounter)  ?  //если счетчик ошибок заполнения  пуст, то идет отправка данных на сервер
       (

        this.beforeClick = false,
        this.showSpinner = true,  //показать колесо загрузки
        this.postRequest(this.form.userName, this.form.userEmail.value, this.form.category, this.form.textarea.text) // функция post - запроса к серверу, в аргументах передаваемые данные

        )
        :(
        this.beforeClick = false,
        alert("Please fill in all fields")); // сообщение если не все поля заполнены



    },

    emailValidation(type, value){
        if (type === "email") {
       return  this.form.userEmail.valid = this.isEmail(value) ? true : false;
        }
    },

    postRequest(name,email,category,text){

        const data = {
            name: name,
            email: email,
            category:category,
            text: text
        }
        JSON.stringify(data);

        this.axios.post('http://localhost:8080/', data)
            .then((response) => {
                setTimeout(() => {this.showSpinner = false}, 2000);   //убрать колесо загрузки
                this.showSubmitFeedback = true;     //показать окно ответа
                this.response = goodResponse;   //полученный ответ присваиваем локальному обЪекту и выводим в блоке feedback (тест)
                console.log(this.response);     //
                setTimeout(() => {this.showSubmitFeedback = false}, 6000); //окно ответа пропадет через 6 сек

        })
            .catch((error) => {
              setTimeout(() => {this.showSpinner = false}, 2000);
              this.showSubmitFeedback = true;
              this.responseError = badResponse;
              console.log(this.responseError);
              setTimeout(() => {this.showSubmitFeedback = false}, 6000);
        });
    },




    errCheck(arr){
     return arr.every( (val, i) => val === false)
    },



  },
  watch:{
    "form.userEmail.value"(value) {
      this.emailValidation("email", value);
    },

  }


}
</script>

<style>
.form__status{
    margin: 1.5rem;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.form__status-logo{
    transform: scale(8);
}
.form__row{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form__error{
    color: #DF4343;
    font-size: 18px;
}
.form__spinner{
    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
    padding: 5rem;
}
  .form__action {
    width: 100%;
    height: 50px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 3px;
  }
</style>


