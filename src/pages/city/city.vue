<template>
  <div>
    <city-header></city-header>
    <city-search :citylist="citylist"></city-search>
    <city-list :hostlist="hotCityList" :citylist="citylist" :changeLetter="changeLetter"></city-list>
    <city-alphabet :citylist="citylist" @change="changeClick"></city-alphabet>
  </div>
</template>
<script>
import cityHeader from './components/cityHeader'
import citySearch from './components/citySearch'
import cityList from './components/list'
import cityAlphabet from './components/alphabet'
import axios from 'axios'
export default {
    name:'city',
    components:{
        cityHeader,
        citySearch,
        cityList,
        cityAlphabet
    },
    data() {
        return {
            hotCityList:[],
            citylist:{},
            changeLetter:""
        }
    },
    methods: {
        cityListData () {
            axios.get('/api/city.json')
                .then(this.getHomeDataSuccess)
        },
        getHomeDataSuccess (res) {
            var data=res.data
            if(data.ret){
                this.hotCityList=data.data.hotCities
                this.citylist=data.data.cities
            }
        },
        changeClick (res) {
            this.changeLetter=res
        }
    },
    mounted () {
        this.cityListData()
    },
}
</script>
<style lang="stylus" scoped></style>