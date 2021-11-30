<template>
  <div class="w-full flex flex-col space-y-12 items-center">
    <div class="text-gray-700 py-4 px-2 w-64 h-32 flex flex-col items-center shadow rounded">
      <h1 class="text-2xl">{{ selectedStreet.name }}</h1>
      <div class="w-full flex flex-row space-x-2 justify-center py-4 text-xl">
        <div class="flex flex-col w-32 items-center">
          <span>Disponibles</span>
          <span>{{ selectedStreet.parkingSlots - selectedStreet.occupiedSlots }}</span>
        </div>
        <div class="border border-black h-full py-2"></div>
        <div class="flex flex-col w-32 items-center">
          <span>Totales</span>
          <span>{{ selectedStreet.parkingSlots }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full space-y-6">
      <select 
        class="py-2 px-2 w-64 outline-none border-2 border-blue-500 rounded"
        v-model="streetName"
      >
        <option 
          v-for="street in streets" 
          :key="street.id"
        >
          {{ street.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import humps from 'humps';

export default {
  name: 'ParkingSlots',
  data () {
    return {
      loading: false,
      streets: [],
      streetName: '',
    }
  },
  computed: {
    selectedStreet() {
      return this.streets
        .find(street => street.name === this.streetName) || this.streets[0];
    }
  },
  async created() {
    await this.updateStreets();
  },
  async mounted() {
    setInterval(async () => { 
      await this.updateStreets();
    }, 500)
  },
  methods: {
    async updateStreets () {
      const url = `/api/v1/streets`;
      const response = await axios.get(url);
      this.streets = humps.camelizeKeys(response.data);
    }
  }
}
</script>

<style>
.btn {
  @apply bg-blue-600 py-2 px-4 text-xl rounded text-white hover:bg-blue-700;
}
</style>
