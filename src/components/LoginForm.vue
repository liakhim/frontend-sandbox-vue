<template>
    <div class="wrapper">
        <InputCustom :error="''"/>
        <InputCustom :error="'test error'"/>
    </div>
</template>
<script>
import InputCustom from "./InputCustom.vue";
export default {
    name: 'LoginForm',
    components: {
        InputCustom
    }
}
</script>
<style lang="scss">

</style>
