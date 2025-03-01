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
@mixin media($size) {
    @media(max-width: #{$size}px) {
        @content
    }
}

.pic {
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @include media(1440) {
      width: 110px;
      height: 110px;
  }

  @include media(1024) {
      width: 100px;
      height: 100px;
  }

  @include media(768) {
      width: 90px;
      height: 90px;
  }

  @include media(425) {
      width: 80px;
      height: 80px;
  }

  @include media(375) {
      width: 70px;
      height: 70px;
  }

  @include media(320) {
      width: 60px;
      height: 60px;
  }
}

.cocktails {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 38px;
  max-height: 550px;
  overflow-y: auto;

  @include media(1440) {
      gap: 30px;
  }

  @include media(1024) {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
  }

  @include media(768) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
  }

  @include media(425) {
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
  }

  @include media(375) {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
  }

  @include media(320) {
      grid-template-columns: repeat(1, 1fr);
      gap: 5px;
      max-height: 200px;
  }

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

      @include media(1440) {
          font-size: 15px;
      }

      @include media(1024) {
          font-size: 14px;
      }

      @include media(768) {
          font-size: 13px;
      }

      @include media(425) {
          font-size: 12px;
      }

      @include media(375) {
          font-size: 11px;
      }

      @include media(320) {
          font-size: 10px;
      }
    }
  }
}
</style>