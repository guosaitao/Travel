<template>
    <div class="father">
        <div class="jmcc_header">
            <slot name='header'></slot>
        </div>
        <child>
            <p style="color:red">这是father--red</p>
            <p style="color:blue">这是father--blue</p>
        </child>
         <div class="jmcc_footer">
            <slot name='footer'></slot>
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