<template>
  <div id="app" :class="{'theme-light': this.$store.getters.THEMELIGHT, 'theme-dark': !this.$store.getters.THEMELIGHT}">
    <Header />
    <LoaderSpinner v-if="this.$store.getters.SHOWLOADER"/>
    <TopCardsSection/>
    <div class="d-flex justify-content-center p-4">
      <CountrySelector />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TopCardsSection from '@/components/TopCardsSection'
import CountrySelector from '@/components/CountrySelector'
import LoaderSpinner from '@/components/LoaderSpinner'

import { getGlobalData } from '@/api/APIService'

export default {
  name: 'App',
  components: {
    Header,
    LoaderSpinner,
    TopCardsSection,
    CountrySelector
  },
  mounted: function() {
    getGlobalData().subscribe( 
      res => {
        let country = 'Worldwide'
        let pageData = res.data
        let confirmed = pageData.confirmed.value
        let death = pageData.deaths.value
        let recovered = pageData.recovered.value
        this.$store.dispatch( "setStatusData", { country, confirmed, death, recovered } )
        this.$store.dispatch( "showHideLoader" )
      },
      err => console.log(err)
    )
  },
  head: {
    title: {
      inner: 'Home',
      separator: '-',
      complement: 'Covid19Dashboard By Chayan'
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/common';
  
  #app {
    overflow: auto;
    @media (min-width: $medium) {
      height: 100vh;
    }
  }
</style>
