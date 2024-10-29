import { defineStore } from 'pinia';

export const useUserStore = defineStore('User', {
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
  }),
  persist: true,
});
