<template>
  <div class="wrap" v-if="cocktail">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
      <div class="info">
        <h2 class="title">{{ cocktail.strDrink }}</h2>
        <div class="line"></div>

        <div class="slider">
          <Swiper :modules="modules" :space-between="25" :breakpoints="swiperOptions.breakpoints" class="swiper">
            <SwiperSlide class="swiper-slide" v-for="(ingredients, idx) in ingredient" :key="idx">
              <img :src="`${INGREDIENT_PIC}${ingredients}-Small.png`" alt="">
              <p class="name">{{ ingredients }}</p>
            </SwiperSlide>
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
import { COCKTAIL_RANDOM, INGREDIENT_PIC } from '@/constants'
import axios from 'axios'
import { ref, reactive } from 'vue'
import imgUrl from '@/assets/images/bg.svg'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const swiperOptions = reactive({
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1450: {
            slidesPerView: 5.5
        }
    }
})
const modules = reactive([Navigation])

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
      font-size: 24px;
    }

    &__items {
      width: 100%;
      padding: 50px 0 80px;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-left: 0;

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
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1.5px;
      max-width: 100%;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}

.slider {
  padding: 20px 0;
}

.swiper {
  width: 100%;
}

.name {
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.5px;
  margin-top: 10px;
  text-align: center;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 576px) {
  .wrap {
    & .info {
      & .title {
        font-size: 28px;
      }
      & .instructions {
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 1.8px;
      }
    }
  }
}

@media (min-width: 768px) {
  .wrap {
    & .info {
      & .title {
        font-size: 32px;
      }
      & .instructions {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 2px;
      }
    }
  }
}

@media (min-width: 992px) {
  .wrap {
    & .info {
      & .title {
        font-size: 36px;
      }
      & .instructions {
        font-size: 22px;
        line-height: 33px;
        letter-spacing: 2.2px;
      }
    }
  }
}
</style>