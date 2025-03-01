<template>
  <div class="wrap" v-if="cocktail">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
      <div class="info">
        <h2 class="title">{{ cocktail.strDrink }}</h2>
        <div class="line"></div>

        <!-- <div class="info__items">
          <div class="info__items-item" v-for="(item, idx) in ingredient" :key="idx">
            {{ item.name }} | <span v-if="item.measure">{{ item.measure }}</span>
          </div>
        </div> -->
        <div class="slider">
          <Swiper :slides-per-view="3" :space-between="50" class="swiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>

        <div class="instructions">
          <p class="instructions__category">{{ cocktail.strCategory }}</p>
          <p class="instructions__cocktail">{{ cocktail.strInstructions }}</p>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import AppLayout from '@/components/AppLayout/AppLayout.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { COCKTAIL_RANDOM } from '@/constants'
import axios from 'axios'
import { ref } from 'vue'
import imgUrl from '@/assets/images/bg.svg'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const route = useRoute()
const router = useRouter()
const cocktailId = computed(() => route.path.split('/').pop())
const cocktail = ref(null)

const ingredient = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = cocktail.value[`strIngredient${i}`]

    ingredients.push(ingredient)
  }
  return ingredients
})

async function getCocktail() {
  const data = await axios.get(COCKTAIL_RANDOM)
  cocktail.value = data.data.drinks[0]
}
getCocktail()

function goBack() {
  router.go(-1)
}
</script>

<style lang="scss">
.wrap {
  & .info {
    margin-top: 80px;

    & .title {
      text-align: center;
    }

    &__items {
      width: 560px;
      padding: 50px 0 80px;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-left: 40px;

      &-item {
        position: relative;
        padding-left: 30px;
        color: #fff;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 1.8px;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0px;
          transform: translateY(-50%);
          background: url('@/assets/images/heart_icon.svg') no-repeat 50%;
          width: 20px;
          height: 20px;
        }
      }
    }

    & .instructions {
      color: #d3d3d3;
      text-align: center;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 2px;
      max-width: 516px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
}

.slider {
  padding: 50px 0;
}

.swiper {
  width: 600px;
}
</style>