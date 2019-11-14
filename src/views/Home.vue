<template>
  <v-content class="pa-0">
    <v-container fluid class="">
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md9 >
          <Standing />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  
</template>

<script>
  import Standing from '@/components/home/standing'
 
  
  export default {
    components: {
      Standing,
    
    }
  }
</script>
