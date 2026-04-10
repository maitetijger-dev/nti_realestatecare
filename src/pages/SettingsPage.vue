<template>
  <q-page class="q-pa-md">
    <div class="text-h6 q-mb-md">
      Instellingen
    </div>

    <q-list bordered class="rounded-borders bg-white">

      <q-item clickable>
        <q-item-section>
          <q-item-label>Accountgegevens</q-item-label>
          <q-item-label caption>Bekijk of wijzig je profiel</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>
          <q-item-label>Thema</q-item-label>
          <q-item-label caption>Licht / Donker</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="settings.darkMode" />
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>
          <q-item-label>Meldingen</q-item-label>
          <q-item-label caption>Push- en geluidsmeldingen</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="settings.notifications" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script setup>
import { useSettingsStore } from 'src/stores/settings'

const settings = useSettingsStore()
</script>
