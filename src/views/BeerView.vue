<template>
  <div>
    <BeerInfoComponent
      class="mt-5"
      :beerInfo="beerInfo" />
    <button
      class="btn btn-secondary mt-4"
      @click="updateBeer">
      I want another
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { store } from '@/store';

import BeerInfoComponent from '@/components/BeerInfoComponent.vue';
import { BeerInfo } from '@/interfaces/beerInfo';

export default defineComponent({
  name: 'BeerView',
  components: {
    BeerInfoComponent: BeerInfoComponent
  },
  computed: {
    beerInfo(): BeerInfo {
      return this.$store.state.beerInfo;
    }
  },
  methods: {
    updateBeer(): void {
      store.dispatch('loadRandomBeerInfo');
    }
  },
  mounted() {
    if (!this.$route.query.isRecomended) {
      this.updateBeer();
    }
  }
});
</script>
