<script>
export default {
  inheritAttrs:false,
  props:{
    options:{
      type:Array,
      required:true
    },
    label:{
      type:string,
      required:false
    },
  }
}
</script>
<template>
  <div class="main-controller">
    <label>{{label}}</label>
    <select>
      <option v-for="option in options" :key="option">{{option}}</option>
    </select>
  </div>
</template>
<style>
</style>
