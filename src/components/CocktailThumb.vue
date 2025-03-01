<template>
  <div>
    <router-link :to="`/cocktails/${cocktail.idDrink}`" class="content">
      <div class="pic" :style="`background-image: url('${cocktail.strDrinkThumb}');`"></div>
      <div class="name">{{ cocktail.strDrink }}</div>
    </router-link>
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
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.cocktails {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 38px;
  max-height: 550px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #60629b;
    border-radius: 12px;
    transition: all .3s ease;
  }

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    & .name {
      color: #fff;
      text-align: center;
      font-size: 16px;
      letter-spacing: 1.6px;
    }
  }
}
</style>