<template>
  <q-card
    class="dashboard-card q-pa-md cursor-pointer"
    :class="cardClass"
    @click="$emit('click')"
  >
    <div class="column items-start justify-between full-height">

      <!-- Icon + Titel -->
      <div class="row items-center full-width">
        <q-icon
          :name="icon"
          size="40px"
          class="q-mr-md"
          :color="iconColor"
        />

        <div class="column">
          <div class="text-subtitle1 text-weight-medium">
            {{ title }}
          </div>
          <div class="text-caption text-grey-7">
            {{ subtitle }}
          </div>
        </div>
      </div>

      <!-- Badge (optioneel) -->
      <div v-if="showBadge && Number(reportStore?.assignedCount) > 0" class="q-mt-sm">
        <q-badge class="my-badge">
          {{ reportStore.assignedCount }} open
        </q-badge>
      </div>
    </div>
  </q-card>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  icon: String,
  iconColor: {
    type: String,
    default: 'primary'
  },
  cardClass: {
    type: String,
    default: 'bg-white'
  },
  showBadge: {
    type: Boolean,
    default: false
  }
})

import { useReportStore } from 'src/stores/reports'
const reportStore = useReportStore()
</script>

<style scoped>
.dashboard-card {
  border-radius: 16px;
  height: 150px; /* Grotere card voor 2x2 grid */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.15s ease;
}

/* Klein hover/touch effect */
.dashboard-card:active {
  transform: scale(0.97);
}
</style>
