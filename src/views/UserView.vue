<template>
  <div class="mb-3">
    <UserInfoComponent :userInfo="userInfo" />
    <div class="col mt-3">
      <div class="p-3">Your recommended beer:</div>
      <h4>
        <a
          class="text-dark"
          href="#/beer?isRecomended=true"
          >{{ beerInfo.beerName }}</a
        >
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { store } from '@/store';

import UserInfoComponent from '@/components/UserInfoComponent.vue';
import { UserInfo } from '@/interfaces/userInfo';
import { BeerInfo } from '@/interfaces/beerInfo';

export default defineComponent({
  name: 'UserView',
  components: {
    UserInfoComponent: UserInfoComponent
  },
  computed: {
    userInfo(): UserInfo {
      return this.$store.state.userInfo;
    },
    beerInfo(): BeerInfo {
      return this.$store.state.beerInfo;
    }
  },
  mounted() {
    store.dispatch('loadRandomUserInfo');
    store.dispatch('loadRandomBeerInfo');
  }
});
</script>
