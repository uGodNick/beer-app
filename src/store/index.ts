import { createStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

import { UserInfo } from '@/interfaces/userInfo';
import { BeerInfo } from '@/interfaces/beerInfo';
import services from '@/services';

interface State {
  userInfo: UserInfo;
  beerInfo: BeerInfo;
}

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    userInfo: {
      userAvatar: '',
      userFirstName: '',
      userLastName: '',
      userPosition: '',
      userDateOfBirth: ''
    },
    beerInfo: {
      beerName: '',
      beerBrand: '',
      beerStyle: '',
      beerHop: '',
      beerYeast: '',
      beerMalts: '',
      beerIbu: '',
      beerAlcohol: '',
      beerBlg: ''
    }
  },
  getters: {},
  mutations: {
    SET_USER_INFO(state: State, userInfo: UserInfo) {
      state.userInfo = userInfo;
    },
    SET_BEER_INFO(state: State, beerInfo: BeerInfo) {
      state.beerInfo = beerInfo;
    }
  },
  actions: {
    async loadRandomUserInfo() {
      const randomUserInfo = await services.getRandomUserInfo();
      store.commit('SET_USER_INFO', randomUserInfo);
    },

    async loadRandomBeerInfo() {
      const randomBeerInfo = await services.getRandomBeerInfo();
      store.commit('SET_BEER_INFO', randomBeerInfo);
    }
  },
  modules: {}
});
