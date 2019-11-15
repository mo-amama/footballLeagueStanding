<template>
  <v-app class="white">

    <v-content>
            <Standing />
    </v-content>
  
    
   
  </v-app>
</template>

<script>
import Standing from '@/components/home/standing'


export default {
  name: 'App',
  components: {
   
 Standing
  },
  data () {
    return {
      refreshing: false,
      registration: null,
      // snackBtnText: '',
      // snackWithBtnText: '',
      // snackWithButtons: false,
      // timeout: 6000,
      //
    }
  },
  created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
        this.refreshing = true;
      window.location.reload();
    });
  },
  methods:{
    showRefreshUI(e) {
      this.registration = e.detail;
      this.snackBtnText = 'Refresh';
      this.snackWithBtnText = 'New version available!';
      this.snackWithButtons = true;
    },
    refreshApp() {
      this.snackWithButtons = false;
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    },
  }
  

  
}
</script>

<style scoped>
/* Provide better right-edge spacing when using an icon button there. */
.snack >>> .v-snack__content {
  padding-right: 16px;
}
</style>
