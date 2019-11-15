<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
         
            <v-flex xs12 md12 lg12 class="pa-1">
                <p class="google-font mb-1" style="font-weight:350; text-align:center; color: white;font-size:300%; background-color:brown">Football League Standing
                   <p class="google-font" style="text-align: center; font-size:110%;color:#9e9e9e">
                   
                </p>
                <v-divider></v-divider>
            </v-flex>
            <div class="mt-5">
                <p class="ma-0 google-font"  style="text-transform: capitalize; font-size:170% ;color:brown">Select League</p>
            </div>
        </v-layout>

         <v-layout wrap align-center justify-center row fill-height class="mt-5 ml-5">
            <v-flex xs12 md6 class="" >
                
           <v-card class="text-xs-center ma-3 mx-auto" max-width="380" height=370 
            >
          <v-responsive class="pt-4">
            <v-avatar size="300" class="grey lighten-2" tile>
              <v-img :src="require('@/assets/img/epl.png')"
                :lazy-src="require('@/assets/img/epl.png')"
                  @click.stop="dialog = true"
              >
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading google-font brown--text">English Premier league</div>
          </v-card-text>  
        </v-card>
            </v-flex>
             <v-dialog
         v-model="dialog"
         max-width="900"
        >
         <EnglishLeague />
         </v-dialog>








        
<v-flex xs12 sm6 md6 class="" >    
           <v-card class="text-xs-center ma-3 mx-auto" max-width="380" height=370 
            
            >
          <v-responsive class="pt-4">
            <v-avatar size="300" class="grey lighten-2" tile>
              <v-img 
              :src="require('@/assets/img/serie.png')"
              :lazy-src="require('@/assets/img/serie.png')"
               @click.stop="dialog = true"
              >
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading google-font brown--text">Series A league</div>
          </v-card-text>  
        </v-card>
            </v-flex>
              <v-dialog
         v-model="dialog"
         max-width="900"
        >
         <ItalyLeague />
         </v-dialog>
         
      
      <v-flex xs12 sm6 md6 class="mt-3" >    
           <v-card class="text-xs-center ma-3 mx-auto" max-width="380" height=370 
            
            >
          <v-responsive class="pt-4">
            <v-avatar size="300" class="grey lighten-2" tile>
              <v-img 
              :src="require('@/assets/img/logo-eredivisie.jpg')"
              :lazy-src="require('@/assets/img/logo-eredivisie.jpg')"
               @click.stop="dialog = true"
              >
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading google-font brown--text">Eredivisie league</div>
          </v-card-text>  
        </v-card>
       
            </v-flex>
  <v-dialog
         v-model="dialog"
         max-width="900"
        >
         <DutchLeague />
         </v-dialog>

          <v-flex xs12 sm6 md6 class="mt-3" >    
           <v-card class="text-xs-center ma-3 mx-auto" max-width="380" height=370 
             @click.stop="dialog = true"
            >
          <v-responsive class="pt-4">
            <v-avatar size="300" class="grey lighten-2" tile>
              <v-img 
               :src="require('@/assets/img/french-ligue-1-prediction.jpg')"
              :lazy-src="require('@/assets/img/french-ligue-1-prediction.jpg')"
              >
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading google-font brown--text">French Ligue 1 league</div>
          </v-card-text>  
        </v-card>
        
            </v-flex> 
            <v-dialog
         v-model="dialog"
         max-width="900"
        >
        <FrenchLeague />
         </v-dialog>
         </v-layout>
         
    </v-container>
</template>

<script>
import EnglishLeague from '@/components/home/englishLeague'
import DutchLeague from '@/components/home/dutchLeague'
import FrenchLeague from '@/components/home/frenchLeague'
import ItalyLeague from '@/components/home/italyLeague'

export default {
     components: {
      EnglishLeague,
      DutchLeague,
      FrenchLeague,
      ItalyLeague
    
    },
    data() {
        return {
            
             dialog: false,
        }
    },
}
</script>
