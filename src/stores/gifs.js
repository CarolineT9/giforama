import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, onMounted } from 'vue'
import APIService from 'src/services/APIService'
export const useGifsStore = defineStore('gifs', () => {
  const gifs = ref([])

  const getGifs = async () => {
    const { data } = await APIService.getTrendingGifs()
    gifs.value = data.data
  }
  onMounted(() => {
    getGifs()
  })
  return {
    gifs,
    getGifs,
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGifsStore, import.meta.hot))
}
