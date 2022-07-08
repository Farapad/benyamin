<script>
export default {
  inheritAttrs:false,
  props:{
    label:{

      type: string | undefined ,
      default:'test',
    },
  },
  methods:{
    updateValue(event) {
      this.$emit('input' , event.target.value)
    }
  }
}
</script>
<template>
  <div class="main-controller">
    <label v-if="label">{{label}}</label>
    <input type="text" @input="updateValue"  v-bind="$attrs"/>
  </div>
</template>
<style>
</style>
