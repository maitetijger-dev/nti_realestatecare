import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from 'src/services/reportService'
import KnowledgeItem from 'src/models/knowledge'

export const useKnowledgeStore = defineStore('knowledge', () => {
  const items = ref([])

  async function loadKnowledge() {
    const data = await api.getKnowledgeBase()
    items.value = data.map(i => new KnowledgeItem(i))
  }

  return { items, loadKnowledge }
})
