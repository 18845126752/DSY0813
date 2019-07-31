<template>
<div>
<h1>this is connot page</h1>
<router-link to="{name:'test1,params:{name:'小a',age:'12'}">Test1</router-link> |
<router-link to="/connect/test2/xiaob/20">Test2</router-link> |
<router-link to="/connect/gotest2/xiaoc/30">goTest2</router-link>
<router-view></router-view> <!--显示位置 -->
<World></World>
</div>
</template>

<script>
import World from "../components/HelloWorld"
export default {
data() {
return {
 msg:'hello' 
 }
}, 
components:{
World
}
}
</script>
<style>

</style>