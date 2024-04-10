<template>
  <div>
    修改注册表
  </div>
</template>

<script >
    import { onMounted, ref } from 'vue';
    import {installWord5} from "../util/util"
    export default {
      setup() {
        const message = ref('Hello, Vue 3!');
        onMounted(() => {
          console.log(message.value);
          // installWord5()
        });
        return { message };
      }
    };
  
</script>

<style lang="less" scoped>

</style>