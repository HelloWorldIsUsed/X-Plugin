<template>
    <div id='x-leftnav'>
        <ul>
            <li class="nav-item" v-for="item in initOption.data">
                <a target='_blank' @click="toggleItem(item)">
                    <i class="iconfont icon-setup"></i>
                    <span>{{item.name}}</span>         
                    <i class="iconfont icon-enter" :class="item.showSubItem?'panel-show-icon':'panel-hide-icon'"></i>
                </a>

                    <ul :style="item.showSubItem?'height:'+46*item.subItem.length+'px;':'height:0px;'">
                        <li v-for="subItem in item.subItem">
                            <a><span>{{subItem.name}}</span></a>
                        </li>
                    </ul>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'X-LeftNav',    
    props: ['initOption'],
    data () {
        return {
            msg: 'dddddddd'
        }
    },
    created: function(){
        /*console.log(this.initOption);
        this.initOption.data.forEach(item => {
            item.showSubItem = false;
        })*/
    },
    methods: {
        toggleItem: function(curItem){
            this.initOption.data.forEach(item => {
                if(item != curItem){
                    item.showSubItem = false;
                }                
            })
            curItem.showSubItem = !curItem.showSubItem;
        }
    }
}
</script>

<style scoped lang='scss'>
#x-leftnav{

    width:220px;
    height:600px;
    background:#263238;
    ul{
        margin:0;
        padding: 0;
        list-style:none;
        a{
            color:#abb1b7;
            font-size: 14px;
            text-decoration: none;
            display: block;
            overflow: hidden;
            padding-left: 20px;
            line-height: 46px;
            max-height: 46px;
            text-align:left;
            i{
                font-size:20px;
                position:absolute;
            }
            .icon-enter{
                font-size:16px;
                right:20px;
                transition:transform .3s;
            }
            .panel-show-icon{
                transform: rotate(90deg);
            }
            span{
                margin-left:30px;
            }
            &:hover{
                color: #fff;
                background: #1f282d;
            }
        }
        .nav-item{
            position:relative;
            ul{
                overflow:hidden;
                transition: height .3s ease;
                background: #1f282d;
                a{
                    &:hover{
                        background: #1c2428;                        
                    }
                }
            }
        }
    }
}
</style>