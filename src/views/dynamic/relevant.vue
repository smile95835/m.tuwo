<template>
<div class="relevant">
    <div class="findFriend">
        <h3>发现朋友</h3>
        <ul class="find-friend" ref="findfriend">
            <li class="friendList" v-for="(item,index) in friendData" :key="index" ref="friendlist">
                <div class="friendHeadImage"><img :src="item.image" /></div>
                <p class="friendName">{{item.name}}</p>
            </li>
        </ul>
        <relevant-iscroll>
            <ul class="friend_relevant">
                <li class="relevantList" v-for="(item,index) in friendData" :key="index">
                    <div class="relevantHeadImage"><img :src="item.image" /></div>
                    
                    <div class="relevantContent">
                      
                            <p class="friend-name">{{item.name}}</p>
                            <p class="operation">你的分享</p>
                            <p class="relevant-time">{{item.year}}</p>
                       
                        
                    </div>
                    <img :src="item.image" class="content-image">
                </li>
            </ul>
        </relevant-iscroll>
    </div>
</div>
</template>

<script>
import RelevantIscroll from './commen/RelevantIscroll.vue'
import {getResultData} from './commen/resultReservice.js'
export default {
    components:{
        RelevantIscroll
    },
     data(){
        return{
            friendData :[]
        }
    },
    mounted(){
        getResultData().then(result=>{
            this.friendData = result
        })
    }
}
</script>

<style lang="scss" scoped>
.relevant{ 
    width:100%;
    .findFriend{
        height:1.08rem;
        
        width:100%;
        h3{
            line-height:0.32rem;
            padding-left:0.16rem;
        }
        .find-friend{
            display: flex;
            flex-wrap: nowrap;
            overflow-y: auto;
            padding-left:0.16rem;
            .friendList{
                display:inline-block;
                margin-right:0.2rem;
                .friendHeadImage{
                    width:0.46rem;
                    height:0.46rem;
                    border:1px solid #ccc;
                    border-radius: 50%;    
                    line-height:0.46rem;
                    text-align: center;
                    background: palegreen;
                    img{
                        width:100%;
                        height:100%;
                        border-radius: 50%;   
                    }
                }
                .friendName{
                    text-align: center;
                    font-size: 0.11rem;
                    line-height: 0.32rem;
                    width:0.46rem;
                    color:#161616;
                    white-space:nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        } 
    }
    .friend_relevant{
        padding:0 0.16rem;
        .relevantList{
            height:0.7rem;
            overflow: hidden;
            .relevantHeadImage{
                width:0.46rem;
                height:0.46rem;
                border:1px solid #ccc;
                border-radius: 50%;   
                line-height: 0.46rem; 
                text-align: center;
                background: palegreen;
                float: left;
                position: relative;
                img{
                    width:100%;
                    height:100%;
                    border-radius: 50%;   
                }
            }
            .relevantContent{
                margin-left:0.1rem;
                float:left;
                border-bottom:1px solid #ccc;
                
            }
            .content-image{
                width:0.55rem;
                height:0.46rem;
                position: absolute;
                right:0.1rem;
            }
        }
    }
}
</style>
