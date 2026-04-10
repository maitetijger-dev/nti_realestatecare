<template>
  <ReportList
    title="Kennisbank & Documentatie"
    :items="knowledgeStore.items"
    :caption="(i) => i.category"
  />
</template>

<script setup>
import { onMounted } from 'vue'
import { useKnowledgeStore } from 'src/stores/knowledge'
import ReportList from 'src/components/ReportList.vue'

const knowledgeStore = useKnowledgeStore()

onMounted(() => {
  knowledgeStore.loadKnowledge()
})
</script>
