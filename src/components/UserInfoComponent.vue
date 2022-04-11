<template>
  <div class="row shadow-sm bg-body rounded">
    <div class="col-12 col-md-6 col-lg-3 border border-dark rounded">
      <img
        :src="userInfo.userAvatar"
        :alt="'picture of ' + userInfo.userFirstName" />
    </div>
    <div class="col-12 col-md-6">
      <div class="row mt-4">
        <div class="col text-end">First Name:</div>
        <div class="col text-start">{{ userInfo.userFirstName }}</div>
      </div>
      <div class="row mt-2">
        <div class="col text-end">Last Name:</div>
        <div class="col text-start">{{ userInfo.userLastName }}</div>
      </div>
      <div class="row mt-2">
        <div class="col text-end">Position:</div>
        <div class="col text-start">{{ userInfo.userPosition }}</div>
      </div>
      <div class="row mt-2">
        <div class="col text-end">Date Of Birth:</div>
        <div class="col text-start">
          {{ userInfo.userDateOfBirth }} ( {{ calculateAges() }} y.o.)
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { UserInfo } from '@/interfaces/userInfo';

export default defineComponent({
  name: 'UserInfoComponent',
  props: {
    userInfo: {
      type: Object as PropType<UserInfo>,
      required: true
    }
  },
  methods: {
    calculateAges() {
      const dateOfBirth = new Date(this.userInfo.userDateOfBirth);
      const nowDate = new Date();

      return Math.ceil(
        Math.round(nowDate.getTime() - dateOfBirth.getTime()) /
          (1000 * 3600 * 24 * 365)
      );
    }
  }
});
</script>

<style scoped></style>
