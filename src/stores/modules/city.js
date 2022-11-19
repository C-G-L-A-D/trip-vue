import { defineStore } from 'pinia'

const useCityStore = defineStore("city", {
    state: () => {
        cities: []
    }
})

export default useCityStore