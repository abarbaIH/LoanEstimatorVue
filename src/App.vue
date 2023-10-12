<script setup>
import { ref, computed, watch } from 'vue'
import Header from './components/Header.vue';
import Button from './components/Button.vue';
import { calcularTotalPagar } from './helpers/index.js'

const cantidad = ref(10000)
const MIN = 2000
const MAX = 18000
const STEP = 100

const meses = ref(6) //inicia con la opcion 6 meses

// aquí calculamos el total con el helper
const total = ref(0)

const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat("es-EU", {
    style: 'currency',
    currency: 'EUR'
  })
  return formatter.format(valor)
}

// El watch permite, a través de un callback, ejecutar una función cuando se produzcan cambios en los estados, como un useEffect en React
watch([cantidad, meses], () => {
  total.value = calcularTotalPagar(cantidad.value, meses.value)
}, { inmediate: true })

// al ser computed no se le pueden pasar parámetros
const pagoMensual = computed(() => {
  return total.value / meses.value
})

const handelChangeDecremento = () => {
  const valor = cantidad.value - STEP
  if (valor >= MIN) {
    cantidad.value = cantidad.value - STEP
  }
}

const handelChangeIncremento = () => {
  const valor = cantidad.value + STEP
  if (valor <= MAX)
    cantidad.value = cantidad.value + STEP
}

</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header />
    <div class="flex justify-between mt-10">
      <Button :operador="'-'" @fn="handelChangeDecremento" />
      <Button :operador="'+'" @fn="handelChangeIncremento" />

    </div>
    <div>
      <!-- Los dos puntos es para darle atributos en vue que sean dinámicos, es decir que le podamos meter una variable (definidas al inicio) -->
      <input type="range" class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600" :min="MIN" :max="MAX"
        :step="STEP" v-model.number="cantidad" />
      <!-- v-model es la "funcion" simplificada que tiene vue para registrar los cambios en el evento del inpunt(como un handlechange...) -->

      <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">{{ formatearDinero(cantidad) }}</p>

      <h2 class="text-2xl font-extrabold text-gray-500 text-center">Elige un <span class="text-indigo-600">plazo </span>a
        pagar
      </h2>
      <select
        class="w-full mt-7 p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        :value="meses" v-model.number="meses">
        <!-- value es para darle el varlor inicial el mismo que el que tiene meses. por otor lado, v-model.number es para actualizar el valor de meses si cambia -->
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>

      </select>


    </div>

    <!-- El v-if es una condicion para que se muestr o no el div -->

    <div v-if="total > 0" class="my-5 space-y-3 bg-gray-50 p-5">
      <h2 class="text-2xl font-extrabold text-gray-500 text-center">
        Resumen de <span class="text-indigo-600">pagos</span>
      </h2>
      <p class="text-xl text-gray-500 text-center font-bold"> {{ meses }} Meses</p>
      <p class="text-xl text-gray-500 text-center font-bold">Total a Pagar: {{ formatearDinero(total) }} </p>
      <p class="text-xl text-gray-500 text-center font-bold">Mensuales: {{ formatearDinero(pagoMensual) }}</p>

    </div>
    <!-- Esto aparece en lugar del div al inicio cuando no se ha metido ninguna cantidad -->
    <p v-else class="text-xl text-center font-bold text-gray-500 my-5">Añade una <span
        class="text-indigo-600">cantidad</span> y
      un <span class="text-indigo-600">plazo</span> a pagar</p>

  </div>
</template>

