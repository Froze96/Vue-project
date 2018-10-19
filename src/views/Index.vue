<template>
  <div class="application">

    <application-navbar/>
    <application-jumbotron/>
    <application-cards/>
    <application-trends/>
    <application-slider/>
    <application-projects/>
    <application-choice/>
    <application-footer/>
  </div>
</template>

<script>
  import ApplicationNavbar from '../components/IndexViewComponents/ApplicationNavbar'
  import ApplicationJumbotron from '../components/IndexViewComponents/ApplicationJumbotron'
  import ApplicationCards from '../components/IndexViewComponents/ApplicationCards'
  import ApplicationTrends from '../components/IndexViewComponents/ApplicationTrends'
  import ApplicationSlider from '../components/IndexViewComponents/ApplicationSlider'
  import ApplicationProjects from '../components/IndexViewComponents/ApplicationProjects'
  import ApplicationChoice from '../components/IndexViewComponents/ApplicationChoice'
  import ApplicationFooter from '../components/IndexViewComponents/ApplicationFooter'


  export default {
    name: "index",
    components: {
      ApplicationNavbar,
      ApplicationJumbotron,
      ApplicationCards,
      ApplicationTrends,
      ApplicationSlider,
      ApplicationProjects,
      ApplicationChoice,
      ApplicationFooter
    },
    data () {
      return {
        sloganTitle: 'we make a better future',
        modalActive:false,
        cardStats:{
          active:false,
          id:0,
        },
      }
    },
    methods: {
      onShowModal () {
        this.modalActive = true;
      },
      onCloseModal () {
        this.modalActive = false;
      }
    }
  }
</script>
