<template>
    <div class="test">
        <div class="header">
            <h1>这是test</h1>
        </div>
        <father>
            <div class="test_header" slot="header">
                <input placeholder="防抖动测试" v-model="text" type="text"/>
            </div>
            <template #content>
                <ul>
                    <li>this is li--01</li>
                    <li>this is li--02</li>
                    <li>this is li--03</li>
                </ul>
            </template>
            <template #footer>
                <p>请求了{{ count }}次</p>
            </template>
            <div slot="background">
                <p>css防止背景图片剪裁</p>
                <div class="back_images">

                </div>
                <div class="content_center">
                    <p>由于徽标大小不一致，通过使用object-fit:contain，我可以控制徽标的width和height，并强制将图像包含在定义的宽度和高度中</p>
                    <div class="icon_img">
                        <img src="../static/images/bzy-logo.png" alt="">
                    </div>
                </div>
            </div>
        </father>
    </div>
</template>
<script>
import father from './slot/father.vue'
import axios from 'axios'
export default {
    name:"test",
    components:{
        father
    },
    data (){
        return {
            count:0,
            text:"",
            searchStr:""
        }
    },
    mounted (){
        this.getApiData()
    },
    watch:{
       text(newVal,oldVal){
           this.debounce(this.getApiData,1000)
       } 
    },
    methods:{
        debounce (func,deply){
            if(this.setTime){
                clearTimeout(this.setTime)
            }
            this.setTime=setTimeout(func, deply);
        },
        getApiData (){
             axios.get('/api/city.json')
                .then((data)=>{
                    this.count++
                })
        }
    }
}
</script>
<style lang="css" scoped>
.content_center{
    text-align: center;
}
.content_center .icon_img{
    width: 128px;
    height: 50px;
    margin: auto;
}
.content_center .icon_img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.back_images{
    background-image: url("http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg");
    background-repeat: round;
    background-size: contain;
    width: 300px;
    height: 100px;
}
    .test{
        display: grid;
        place-items: center;
    }
    input{
        border: 1px solid;
    }
    ul{
        columns: 3;
        column-rule: solid 2px red;
    }
    li{
        display: grid;
        place-items: center;
    }
    li::marker{
        color: red;
    }
</style>