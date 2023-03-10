<template>
  <div>
    <InputNumberZen v-model="myNumber"
                    :disabled="disabled"
                    placeholder="输入整数"
                    integer></InputNumberZen>
  </div>
</template>

<script>
import InputNumberZen from '@/components/InputNumberZen/InputNumberZen.vue'
export default {
  name: 'intInputPage_demo',
  components: {
    InputNumberZen
  },
  data () {
    return {
      disabled: false,
      myNumber: ''
    }
  },
}
</script>

<style>
</style>
