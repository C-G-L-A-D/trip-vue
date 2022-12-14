import { defineStore } from 'pinia'
import { getHomeHotSuggests } from '@/services/modules/home'

const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: []
    }),
    actions: {
        async fetchHotSuggestsData() {
            const res = await getHomeHotSuggests();
            this.hotSuggests = res.data
        }
    }
})

export default useHomeStore