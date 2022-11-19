import { defineStore } from 'pinia'

const useSearchStore = defineStore("search", {
    state: () => {
        keyword: []
    }
})

export default useSearchStore