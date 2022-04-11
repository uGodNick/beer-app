<template>
  <div>
    <h2 class="row">
      <div class="col fw-bold">{{ beerInfo.beerName }}</div>
    </h2>
    <div class="row">
      <div class="col fst-italic">{{ beerInfo.beerBrand }}</div>
    </div>
    <div class="row mt-2 mt-lg-3">
      <div class="col text-end">Style:</div>
      <div class="col text-start">{{ beerInfo.beerStyle }}</div>
    </div>
    <div class="row mt-2 mt-lg-3">
      <div class="col text-end">Hop:</div>
      <div class="col text-start">{{ beerInfo.beerHop }}</div>
    </div>
    <div class="row mt-2 mt-lg-3">
      <div class="col text-end">Yeast:</div>
      <div class="col text-start">{{ beerInfo.beerYeast }}</div>
    </div>
    <div class="row mt-2 mt-lg-3">
      <div class="col text-end">Malts:</div>
      <div class="col text-start">{{ beerInfo.beerMalts }}</div>
    </div>
    <div class="row mt-2 mt-lg-3">
      <div class="col text-end">IBU:</div>
      <div class="col text-start">{{ beerInfo.beerIbu }}</div>
    </div>
    <div class="row mt-2 mt-lg-3">
      <div class="col text-end">Alcohol:</div>
      <div class="col text-start">{{ beerInfo.beerAlcohol }}</div>
    </div>
    <div class="row mt-2 mt-lg-3">
      <div class="col text-end">BLG:</div>
      <div class="col text-start">{{ beerInfo.beerBlg }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BeerInfo } from '@/interfaces/beerInfo';

export default defineComponent({
  name: 'BeerInfoComponent',
  props: {
    beerInfo: {
      type: Object as PropType<BeerInfo>,
      required: true
    }
  }
});
</script>

<style scoped></style>
