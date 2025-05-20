<script setup lang="ts">
import { ref, onMounted } from 'vue';

const ip = ref(null)
const data = ref(null)
const error = ref(null)
const loading = ref(true)

console.log('DataComponent loaded');

const fetchData = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    ip.value = result.ip;
    console.log(ip.value);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const fetchGeoData = async () => {
  if (ip.value) {
    try {
      const response = await fetch(`https://ipapi.co/${ip.value}/json/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  }
};

const logData = async () => {
  if (data.value && ip.value) {
    await fetch('/api/log-ip', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ip: ip.value,
        pais: data.value.country_name,
        region: data.value.region,
        ciudad: data.value.city,
        latitud: data.value.latitude,
        longitud: data.value.longitude,
        zona: data.value.timezone,
      }),
    });
  }
};

onMounted(async () => {
  await fetchData();
  await fetchGeoData();
  await logData();
});
</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Información de tu IP</h2>

    <div v-if="loading">Cargando información...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>

    <div v-else>
      <p><strong>IP:</strong> {{ ip }}</p>
      <p><strong>País:</strong> {{ data.country_name }}</p>
      <p><strong>Región:</strong> {{ data.region }}</p>
      <p><strong>Ciudad:</strong> {{ data.city }}</p>
      <p><strong>Proveedor (ISP):</strong> {{ data.org }}</p>
      <p><strong>Latitud:</strong> {{ data.latitude }}</p>
      <p><strong>Longitud:</strong> {{ data.longitude }}</p>
      <p><strong>Zona Horaria:</strong> {{ data.timezone }}</p>
    </div>
  </div>
</template>