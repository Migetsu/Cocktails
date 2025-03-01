<template>
  <main class="main">
    <AppLayout :imgUrl="imgUrl" :backFunc="removeIngredients" :isBackBtnVisible="!!ingredient">
      <div class="content">
        <div class="info" v-if="!ingredient || !cocktails">
          <h2 class="title">Choose your drink</h2>
          <div class="line"></div>
          <div class="select-wrapper">
            <el-select 
            class="select"
            v-model="rootStore.ingredient" 
            placeholder="Choose main ingredient" 
            @change="getCocktails"
            size="large"
            filterable 
            >
              <el-option 
              v-for="item in ingredients" 
              :key="item.strIngredient1" 
              :label="item.strIngredient1" 
              :value="item.strIngredient1" />
            </el-select>
          </div>
          <div class="text">
            Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.
          </div>
          <img src="@/assets/images/cocktails.svg" alt="" class="img">
        </div>
        <div class="info" v-else>
          <h2 class="title">COCKTAILS WITH {{ ingredient }}</h2>
          <div class="line"></div>
          <div class="cocktails">
            <CocktailThumb v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail"/>
          </div>
        </div>
      </div>
    </AppLayout>
  </main>
</template>

<script setup>
import AppLayout from '@/components/AppLayout/AppLayout.vue'
import CocktailThumb from '@/components/CocktailThumb.vue'
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import imgUrl from '@/assets/images/bg.svg'
import { useRootStore } from '@/store/root'
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()
const { ingredients, cocktails, ingredient } = storeToRefs(rootStore)

const getCocktails = () => {
  rootStore.getCocktails(rootStore.ingredient)
}

function removeIngredients() {
  rootStore.setIngredient(null)
}

onMounted(async () => {
  rootStore.getIngredients()
})

onUnmounted(() => {
  window.scrollTo(0, 0);
})
</script>

<style lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: center;

  & .info {
    padding: 80px 0;
    text-align: center;
    max-height: 80vh;

    & .text {
      margin: 0 auto;
      margin-top: 50px;
      font-size: 16px;
      line-height: 36px;
      letter-spacing: 1.6px;
      text-align: center;
      color: #d3d3d3;
      max-width: 516px;
      width: 100%;
    }

    & .img {
      margin-top: 60px;
    }

    & .select-wrapper {
      & .select {
        width: 240px;

        .el-select__wrapper {
          background: #141414;
        }

        .el-select__placeholder {
          color: #D3D3D3CC;
        }
      }
    }
  }
}
</style>