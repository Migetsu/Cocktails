<template>
  <div class="content">
    <div class="pic" :style="`background-image: url('${cocktail.strDrinkThumb}');`"></div>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
    cocktail: {
        typeof: Object,
        required: true
    }
})
</script>

<style lang="scss">
.pic {
    widows: 120px;
    height: 120px;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>