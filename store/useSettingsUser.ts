import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useSettingsUser = defineStore('useSettingsUser', () => {
    const userCurrency = ref('RUB')
    const changeUserCurrency = (newCurrency) => {
        userCurrency.value = newCurrency
    }
    return {
        userCurrency,
        changeUserCurrency,
    }
})