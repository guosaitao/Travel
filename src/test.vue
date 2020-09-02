<template>
    <div class="test">
        <div class="header">
            <h1>这是test</h1>
        </div>
        <father>
            <div class="test_header" slot="header">
                <h1 style="color:yellow">这是剧名插槽header</h1>
            </div>
            <template #footer>
                <h1 style="color:aqua">这是footer插槽11</h1>
            </template>
        </father>
    </div>
</template>
<script>
import father from './slot/father.vue'
export default {
    name:"test",
    components:{
        father
    }
}
</script>