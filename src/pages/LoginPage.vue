<template>
  <q-page class="q-pa-md flex flex-center">

    <!-- Stap 1: Inloggen -->
    <div v-if="step === 1" class="q-pa-md q-card q-card--bordered" style="width: 350px;">
      <div class="text-h6 q-mb-md">Inloggen</div>

      <q-input v-model="email" label="E-mail" filled class="q-mb-md" />
      <q-input v-model="password" label="Wachtwoord" type="password" filled class="q-mb-md" />

      <q-btn label="Volgende" color="primary" class="full-width" @click="handleLogin" />
    </div>

    <!-- Stap 2: 2FA code -->
    <div v-else class="q-pa-md q-card q-card--bordered" style="width: 350px;">
      <div class="text-h6 q-mb-md">Bevestig je identiteit</div>
      <div class="text-body2 q-mb-md">
        Vul de 6-cijferige code in die naar je is verstuurd. (prototype code = 123456)
      </div>

      <q-input v-model="code" label="Bevestigingscode" filled class="q-mb-md" maxlength="6" />

      <q-btn label="Bevestigen" color="primary" class="full-width" @click="verify" />
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from 'src/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const step = ref(1)
const email = ref('')
const password = ref('')
const code = ref('')

function handleLogin() {
  const ok = auth.startLogin(email.value, password.value)
  if (ok) {
    step.value = 2
  }
}

function verify() {
  const ok = auth.verifyCode(code.value)
  if (ok) {
    router.push('/')   // doorgaan naar home/dashboard
  }
}
</script>

