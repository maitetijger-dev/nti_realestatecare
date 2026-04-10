<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">

    <!-- HEADER -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>

        <!-- Logo -->
        <q-img
          src="src/assets/logo REC_wit.png"
          alt="RealEstateCare logo"
          width="32px"
          class="q-mr-sm cursor-pointer"
          @click="$router.push('/')"
        />

        <q-toolbar-title>
          Real Estate Care
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <!-- PAGINA-INHOUD -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- TAB BAR -->
    <q-footer elevated class="bg-white">
      <q-tabs
        v-model="tab"
        dense
        indicator-color="primary"
        active-color="primary"
        class="text-grey-7"
      >

        <!-- HOME -->
        <q-tab
          name="dashboard"
          icon="home"
          label="Home"
          @click="$router.push('/')"
        />

        <!-- TOEGEWEZEN MET BADGE -->
        <q-tab
          name="assigned"
          icon="assignment"
          label="Toegewezen"
          @click="$router.push('/assigned')"
          class="relative-position"
        >
         <q-badge
            v-if="reportStore.assignedCount > 0"
            class="my-badge tab-badge"
          >
            {{ reportStore.assignedCount }}
          </q-badge>

        </q-tab>

        <!-- UITGEVOERD -->
        <q-tab
          name="completed"
          icon="assignment_turned_in"
          label="Uitgevoerd"
          @click="$router.push('/completed')"
        />

        <!-- KENNISBANK -->
        <q-tab
          name="knowledge"
          icon="menu_book"
          label="Kennisbank"
          @click="$router.push('/knowledge')"
        />

        <!-- INSTELLINGEN -->
        <q-tab
          name="settings"
          icon="settings"
          label="Instellingen"
          @click="$router.push('/settings')"
        />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { useReportStore } from 'src/stores/reports'
import { onMounted } from 'vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const tab = ref(route.name)   // startwaarde = huidige route

watch(
  () => route.name,
  (newName) => {
    tab.value = newName
  }
)

const reportStore = useReportStore()
onMounted(() => {
  reportStore.loadAssigned()
})
</script>


<style>
.relative-position {
  position: relative;
}

.tab-badge {
  position: absolute;
  top: 4px;
  right: 18px;
  padding: 0 4px;
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}
</style>
