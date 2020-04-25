<template>
    <div class="mt-3 position-relative custom-selector">
        <div class="font-weight-bold selector-title" @click="showList()">
            <span v-if="selectedCountry != ''">{{selectedCountry}}</span>
            <span v-else>Select Country</span>
            <span class=" dropdown-toggle float-right"></span>
        </div>
        <div id="selector-list" class="selector-list">
            <ul>
                <li v-if="selectedCountry != ''" @click="showGlobalData()">Select Country</li>
                <li v-for="country in countriesList" :key="country.iso2" @click="changeCountry(country.iso3, country.name)">{{country.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { slideUp, slideDown } from 'es6-slide-up-down';

import { getCountries, getCountryData, getGlobalData } from '@/api/APIService'

export default {
    name: 'CountrySelector',
    data: function( ) {
        return {
            listVisible: false,
            countriesList: [],
            selectedCountry: ''
        }
    },
    methods: {
        showList: function( ) {
            if( !this.listVisible ) {
                this.listVisible = !this.listVisible
                slideDown(
                    document.getElementById('selector-list'),
                    400
                )
            } else {
                this.listVisible = !this.listVisible
                slideUp(
                    document.getElementById('selector-list'),
                    400
                )
            }
        },

        showGlobalData( ) {
            this.$store.dispatch( "showHideLoader" )
            this.selectedCountry = ''
            slideUp(
                document.getElementById('selector-list'),
                400
            )
            getGlobalData().subscribe( res => {
                let country = 'Worldwide'
                let pageData = res.data
                let confirmed = pageData.confirmed.value
                let death = pageData.deaths.value
                let recovered = pageData.recovered.value
                this.$store.dispatch( "setStatusData", { country, confirmed, death, recovered } )
                this.$store.dispatch( "showHideLoader" )
            })
        },

        changeCountry: function(iso3, name) {
            this.$store.dispatch( "showHideLoader" )
            this.selectedCountry = name
            slideUp(
                document.getElementById('selector-list'),
                400
            )
            getCountryData( iso3 ? iso3 : name ).subscribe(
                res => {
                    let data = res.data
                    let confirmed = data.confirmed.value
                    let death = data.deaths.value
                    let recovered = data.recovered.value
                    this.$store.dispatch( "setStatusData", { country:name, confirmed, death, recovered } )
                    this.$store.dispatch( "showHideLoader" )
                },
                err => console.log( err )
            )
        }
    },
    mounted: function( ) {
        getCountries().subscribe(
            res => this.countriesList = res.data.countries
        )
    }
}
</script>

<style lang="scss" scoped>
    .selector-title, .selector-list {
        width: 280px;
        padding: 0.375rem 0.75rem;
        border-radius: 10px;
    }
    .selector-title {
        cursor: pointer;
    }
    .selector-list {
        top: 42px;
        position: absolute;
        display: none;
        ul {
            padding-inline-start: 0;
            overflow-y: auto;
            max-height: 30vh;
            li {
                list-style: none;
                padding: 0.375rem;
                cursor: pointer;
                &:hover {
                    font-weight: 700;
                }
            }
        }
    }
</style>