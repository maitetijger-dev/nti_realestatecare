import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from 'src/services/reportService'
import Report from 'src/models/report'

export const useReportStore = defineStore('reports', () => {
  const completed = ref([])
  const assigned = ref([])

  const assignedCount = computed(() => assigned.value.length)

  async function loadCompleted() {
    const data = await api.getCompletedReports()
    completed.value = data.map(r => new Report(r))
  }

  async function loadAssigned() {
    const data = await api.getAssignedReports()
    assigned.value = data.map(r => new Report(r))
  }

  return {
    completed,
    assigned,
    assignedCount,
    loadCompleted,
    loadAssigned
  }
})
