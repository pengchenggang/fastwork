<template>
  <div>
    <autoHeight v-model="autoHeightValue"
                :subValue="100" />
    autoHeightValue: {{ autoHeightValue }}
  </div>
</template>
<script>
import autoHeight from "@/components/autoHeight/autoHeight.vue"
export default {
  name: 'autoHeightPageDemo',
  components: {
    autoHeight
  },
  data () {
    return {
      autoHeightValue: 0
    }
  }
}
</script>
