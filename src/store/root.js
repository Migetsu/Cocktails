import { defineStore } from "pinia";
import axios from "axios";
import { INGREDIENTS_URL, COCKTAILS_BY_INGR_URL } from '../constants'
import { remove, set } from "lodash";

export const useRootStore = defineStore("root", {
    state: () => ({
        ingredients: [],
        cocktails: [],
        ingredient: null
    }),
    actions: {
        async getIngredients() {
            const data = await axios.get(INGREDIENTS_URL)
            this.ingredients = data.data.drinks
        },

        async getCocktails(ingredient) {
            const data = await axios.get(`${COCKTAILS_BY_INGR_URL}${ingredient}`)
            console.log(`${COCKTAILS_BY_INGR_URL}${ingredient}`);
            this.cocktails = data.data.drinks
        },

        setIngredient(ingredient) {
            this.ingredient = ingredient
        }
    },
    getters: {},
})