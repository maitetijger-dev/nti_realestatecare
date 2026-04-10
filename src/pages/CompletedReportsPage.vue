<template>
  <ReportList
    title="Uitgevoerde inspecties"
    :items="sortedReports"
    icon="assignment_turned_in"
    :caption="(r) => `${r.address} • ${formatDate(r.date)}`"
    :onItemClick="openReport"
  />
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useReportStore } from 'src/stores/reports'
import ReportList from 'src/components/ReportList.vue'

const reportStore = useReportStore()

onMounted(() => {
  reportStore.loadCompleted()
})

const sortedReports = computed(() =>
  [...reportStore.completed].sort((a, b) => new Date(b.date) - new Date(a.date))
)

const formatDate = (date) =>
  new Date(date).toLocaleDateString('nl-NL')

function openReport(report) {
  console.log('Open report:', report)
}
</script>
