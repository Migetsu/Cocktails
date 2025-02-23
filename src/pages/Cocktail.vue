<template>
  <div class="wrap" v-if="cocktail">
    <AppLayout :imgUrl="cocktail.strDrinkThumb">
      <div class="info">
        <h2 class="title">{{ cocktail.strDrink }}</h2>
        <div class="line"></div>

        <div class="info__items">
          <div class="info__items-item" v-for="(item, idx) in ingredient" :key="idx">
            {{ item.name }} | <span v-if="item.measure">{{ item.measure }}</span>
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import AppLayout from '@/components/AppLayout/AppLayout.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { COCKTAIL_DETAILS_URL } from '@/constants'
import axios from 'axios'
import { ref } from 'vue'
import imgUrl from '@/assets/images/bg.svg'

const route = useRoute()
const cocktailId = computed(() => route.path.split('/').pop())
const cocktail = ref(null)

const ingredient = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = {}
    ingredient.name = cocktail.value[`strIngredient${i}`]
    ingredient.measure = cocktail.value[`strMeasure${i}`]

    ingredients.push(ingredient)
  }
  return ingredients
})

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_DETAILS_URL}${cocktailId.value}`)
  cocktail.value = data.data.drinks[0]
}
getCocktail()
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

      &-item {
        position: relative;
        padding-left: 30px;

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
  }
}
</style>