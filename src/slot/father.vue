<template>
    <div class="father">
        <div class="jmcc_header">
            <slot name='header'></slot>
        </div>
        <div class="jmcc_footer">
            <slot name='footer'></slot>
        </div>
        <child>
            <p style="color:red">这是father--red</p>
            <p style="color:blue">这是father--blue</p>
        </child>
        <div class="jmcc_content">
            <slot name='content'></slot>
        </div>
        <div class="jmcc_background">
            <slot name="background"></slot>
        </div>
    </div>
</template>
<script>
import child from './child'
export default {
    name:"father",
    components:{
        child
    }
}
</script>
<style lang="css" scoped>
    
</style>