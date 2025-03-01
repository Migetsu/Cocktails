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
@mixin media($size) {
    @media(max-width: #{$size}px) {
        @content
    }
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;

  & .info {
    padding: 80px 0;
    text-align: center;
    // max-height: 100vh;
    overflow: hidden;

    @include media(1440) {
        padding: 70px 0;
    }

    @include media(1024) {
        padding: 60px 0;
    }

    @include media(768) {
        padding: 50px 0;
    }

    @include media(425) {
        padding: 40px 0;
    }

    @include media(375) {
        padding: 30px 0;
    }

    @include media(320) {
        padding: 20px 0;
    }

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

      @include media(1440) {
          margin-top: 45px;
          font-size: 15px;
          line-height: 34px;
      }

      @include media(1024) {
          margin-top: 40px;
          font-size: 14px;
          line-height: 32px;
      }

      @include media(768) {
          margin-top: 35px;
          font-size: 13px;
          line-height: 30px;
      }

      @include media(425) {
          margin-top: 30px;
          font-size: 12px;
          line-height: 28px;
      }

      @include media(375) {
          margin-top: 25px;
          font-size: 11px;
          line-height: 26px;
      }

      @include media(320) {
          margin-top: 20px;
          font-size: 10px;
          line-height: 24px;
      }
    }

    & .img {
      margin-top: 20px;

      @include media(1440) {
          margin-top: 15px;
      }

      @include media(1024) {
          margin-top: 10px;
      }

      @include media(768) {
          margin-top: 5px;
      }

      @include media(425) {
          margin-top: 0;
      }

      @include media(375) {
          margin-top: 0;
      }

      @include media(320) {
          margin-top: 0;
      }
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

        @include media(1440) {
            width: 230px;
        }

        @include media(1024) {
            width: 220px;
        }

        @include media(768) {
            width: 210px;
        }

        @include media(425) {
            width: 200px;
        }

        @include media(375) {
            width: 190px;
        }

        @include media(320) {
            width: 180px;
        }
      }
    }
  }
}
</style>