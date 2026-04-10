<template>
  <q-page class="flex flex-center bg-grey-2">

    <q-card class="q-pa-lg" style="width: 350px; max-width: 90%;">
      <q-card-section>
        <div class="text-h6 text-center q-mb-md">Inloggen</div>

        <q-input
          v-model="email"
          label="E-mail"
          type="email"
          outlined
          dense
          class="q-mb-md"
        />

        <q-input
          v-model="password"
          label="Wachtwoord"
          type="password"
          outlined
          dense
          class="q-mb-lg"
        />

        <q-btn
          label="Inloggen"
          color="primary"
          unelevated
          class="full-width"
          @click="login"
        />
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = useAuthStore()

function login() {
  const ok = auth.login(email.value, password.value)

  if (ok) {
    router.push('/')
  } else {
    alert('Ongeldige login (simulatie)')
  }
}
</script>
