import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useOverallPortfolio = defineStore('useOverallPortfolio', () => {
    const overallPortfolio = ref(100)
    const rates = {
      'USD': 0.012704,
      'EUR': 0.011073,
      'JPY': 1.85,
      'GBP': 0.009402,
      'RUB': 1,
    }

    const convertOverallPortfolio = (currency) => {
        if (!rates[currency]) {
          return null
        }

        overallPortfolio.value = overallPortfolio.value * rates[currency]
    }
    return {
        overallPortfolio,
        convertOverallPortfolio
    }
})