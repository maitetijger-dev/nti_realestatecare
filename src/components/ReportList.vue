<template>
  <q-page class="q-pa-md">
    <div class="text-h6 q-mb-md">{{ title }}</div>

    <q-list bordered class="rounded-borders bg-white">
      <q-item
        v-for="item in items"
        :key="item.id"
        clickable
        @click="() => onItemClick?.(item)"
      >
        <q-item-section avatar v-if="icon">
          <q-icon :name="icon" color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>

          <q-item-label caption v-if="caption">
            {{ caption(item) }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
defineProps({
  title: String,
  items: Array,
  icon: String,
  caption: Function,
  onItemClick: Function
})
</script>
