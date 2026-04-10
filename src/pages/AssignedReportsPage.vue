<template>
  <ReportList
    title="Toegewezen inspecties"
    :items="sortedReports"
    icon="assignment"
    :caption="(r) => `${r.address} • ${formatDate(r.date)}`"
  />
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useReportStore } from 'src/stores/reports'
import ReportList from 'src/components/ReportList.vue'

const reportStore = useReportStore()

onMounted(() => {
  reportStore.loadAssigned()
})

const sortedReports = computed(() =>
  [...reportStore.assigned].sort((a, b) => new Date(b.date) - new Date(a.date))
)

const formatDate = (date) =>
  new Date(date).toLocaleDateString('nl-NL')
</script>
