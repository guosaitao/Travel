<template>
<div>
    <detail-banner :bannerimg="bannerimg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
</div>
</template>
<script>
import detailBanner from './components/detailBanner'
import detailHeader from './components/header'
import ajaxs from 'axios'
export default {
    name:'detail',
    components:{
        detailBanner,
        detailHeader
    },
    data () {
        return {
            bannerimg:"",
            sightName:"",
            gallaryImgs:[]
        }
    },
    methods:{
        getDetailData () {
            ajaxs.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then (this.getDetailDataSuccess)
        },
        getDetailDataSuccess (res) {
            console.log(res.data.data)
            const data=res.data.data
            this.bannerimg=data.bannerImg
            this.sightName=data.sightName
            this.gallaryImgs=data.gallaryImgs
        }
    },
    mounted () {
        this.getDetailData()
    }
}
</script>
<style lang="stylus" scoped>
    .content
        height: 50rem
</style>