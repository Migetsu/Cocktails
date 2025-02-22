<template>
  <div class="wrapper">
    <div class="img" :style="`background-image: url('${imgUrl}')`"></div>
    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    imgUrl: {
        typeof: String,
        required: true
    }
})
</script>

<style>

</style>