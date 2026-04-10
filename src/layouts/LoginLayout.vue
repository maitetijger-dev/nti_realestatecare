<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>

        <q-img
          src="/icons/logo_REC_wit.png"
          alt="RealEstateCare logo"
          width="32px"
          class="q-mr-sm cursor-pointer"
        />

        <q-toolbar-title>
          Real Estate Care
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
</script>
