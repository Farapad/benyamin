import { defineStore } from "pinia"

export const PageStore = defineStore({
    id: 'PageStore',
    state: () => ({
        loadingRoute: false,
    }),

})
