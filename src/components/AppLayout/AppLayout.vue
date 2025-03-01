<template>
  <div class="wrapper">
    <div class="img" :style="`background-image: url('${imgUrl}')`"></div>
    <div class="main">
      <div class="btns">
        <el-button v-if="isBackBtnVisible" class="back" @click="backFunc" type="primary" :icon="Back" circle />
        <el-button class="btn" @click="goRandom">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { Back } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ROUTERS_PATH } from '@/constants'

const route = useRoute()
const router = useRouter()

const routeName = computed(() => route.name)

function goRandom() {
    router.push(ROUTERS_PATH.COCKTAIL_RANDOM)
    if (routeName.value === ROUTERS_PATH.COCKTAIL_RANDOM) {
        router.go()
    }
}

const props = defineProps({
    imgUrl: {
        typeof: String,
        required: true
    },
    backFunc: {
        typeof: Function,
        required: true
    },
    isBackBtnVisible: {
        typeof: Boolean,
        default: true
    }
})
</script>

<style>

</style>