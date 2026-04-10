<template>
  <q-page class="q-pa-md">

    <div class="text-h6 q-mb-md">
      Home
    </div>

    <div class="row q-col-gutter-md">

      <div class="col-6">
        <DashboardCard
          title="Toegewezen"
          subtitle="Openstaande inspecties"
          icon="assignment_turned_in"
          showBadge
          cardClass="bg-white full-height"
          @click="$router.push('/assigned')"
        />
      </div>

      <div class="col-6">
        <DashboardCard
          title="Uitgevoerd"
          subtitle="Afgeronde inspecties"
          icon="history"
          :showBadge="false"
          cardClass="bg-white full-height"
          @click="$router.push('/completed')"
        />
      </div>

      <div class="col-6">
        <DashboardCard
          title="Kennisbank"
          subtitle="Documentatie & procedures"
          icon="menu_book"
          :showBadge="false"
          cardClass="bg-white full-height"
          @click="$router.push('/knowledge')"
        />
      </div>

      <div class="col-6">
        <DashboardCard
          title="Instellingen"
          subtitle="Account & voorkeuren"
          icon="settings"
          :showBadge="false"
          cardClass="bg-white full-height"
          @click="$router.push('/settings')"
        />
      </div>

    </div>

  </q-page>
</template>

<script setup>
import DashboardCard from 'components/DashboardCard.vue'
</script>
