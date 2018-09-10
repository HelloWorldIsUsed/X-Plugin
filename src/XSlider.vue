<template>
    <div id='x-slide'>
        <div class="slide-container" :style="{transform: 'translate3d('+ left +'px, 0px, 0px)'}">            
            <div class="slide" v-for="item in initOption.data"><img :style="{width:width+'px'}" :src="item"/></div>
        </div>
        <ol class="slide-pagination">
            <li :class="curPage == index? 'active' : ''" v-for="(item,index) in initOption.data"></li>
        </ol>
        <div class="pre-btn switch-btn" @click="preClick"><i class="iconfont icon-return"></i></div>
        <div class="next-btn switch-btn" @click="nextClick"><i class="iconfont icon-enter"></i></div>
    </div>
</template>

<script>
import './assets/iconfont/iconfont.css'
export default {
    name: 'X-Slide',
    props: ['initOption'],
    data () {
        return {
            msg: 'Welcome',
            width: 0,
            left: 0,
            pages: this.initOption.data.length,
            curPage: 0,
            timer: ""
        }
    },
    methods: {
        //前
        preClick: function(){
            clearTimeout(this.timer);
            if(this.curPage != 0){
                this.curPage--;
                this.left = this.left + this.width;
            }
            else{
                this.curPage = this.pages -1;
                this.left = -(this.pages-1)*this.width;
            }
            this.autoPlay();
        },
        //后
        nextClick: function(){
            clearTimeout(this.timer);
            if(this.curPage < this.pages - 1){
                this.curPage++;
                this.left = this.left - this.width;
            }            
            else{
                this.curPage = 0;
                this.left = 0;
            }            
            this.autoPlay();
        },
        //自动
        autoPlay: function(){
            var _this = this;
            _this.timer = setTimeout(function(){
                _this.nextClick();
            },_this.initOption.speed)
        }
    },
    mounted: function(){
        this.width = this.$el.offsetWidth;
        this.autoPlay();
    }
}
</script>

<style scoped lang="scss">
#x-slide{
    width:100%;
    height:100%;
    position:relative;
    overflow:hidden;
    .slide-container{
        height:100%;
        display: flex;
        transform: translate3d(0px, 0px, 0px);
        transition-timing-function: ease;
        transition-duration: 300ms;
        .slide{
            width:100%;
            height:100%;
            flex-shrink:0;
        }
    }
    .slide-pagination{
        margin-bottom: 8px;
        width: 80%;
        left: 10%;
        position: absolute;
        bottom: 10px;
        z-index: 15;
        padding-left: 0;
        list-style: none;
        text-align: center;
        li{
            display:inline-block;
            margin:0 5px;
            width: 25px;
            height: 2px;
            background-color: hsla(0,0%,47%,.4);
            transition: .3s ease-in;
            -webkit-transition: .3s ease-in;
            -moz-transition: .3s ease-in;
            -o-transition: .3s ease-in;
            -ms-transition: .3s ease-in
        }
        .active{
            background-color: #fff
        }
    }
    .switch-btn{
        position: absolute; 
        top: 50%;
        margin-top: -20px;  
        cursor:pointer;
    }
    .pre-btn{
        left:0;    
    }
    .next-btn{
        right:0;
    }
    .iconfont{
        font-size: 40px;
    }
}
</style>