<template>
  <q-layout view="lHh Lpr lFf">

    <!-- HEADER (zelfde als MainLayout) -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>

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

  </q-layout>
</template>

<script setup>
</script>
