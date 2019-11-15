<template>
<v-content>
  
      <v-card>
        <v-card-title class="headline" style="background-color:brown; color:white; text-align:center">Dutch League</v-card-title>
            <table class="table">
                <template>
                  <thead>
                    <tr>
                      <th class="text-left">#</th>
                      <th class="text-left">Name</th>
                      <th class="text-left">pg</th>
                      <th class="text-left">w</th>
                      <th class="text-left">d</th>
                      <th class="text-left">l</th>
                      <th class="text-left">p</th>
                      <th class="text-left">gf</th>
                      <th class="text-left">ga</th>
                      <th class="text-left">gd</th>
                    </tr>
                  </thead>
                  <tbody class="tbody">
                    <tr v-for="item in DutchLeague" :key="item.position">
                      <td class="text-left">{{ item.position }}</td>
                      <td class="text-left">{{ item.team.name}}</td>
                      <td class="text-left">{{ item.playedGames}}</td>
                      <td class="text-left">{{ item.won}}</td>
                      <td class="text-left">{{ item.draw}}</td>
                      <td class="text-left">{{ item.lost}}</td>
                      <td class="text-left">{{ item.points}}</td>
                      <td class="text-left">{{ item.goalsFor}}</td>
                      <td class="text-left">{{ item.goalsAgainst}}</td>
                      <td class="text-left">{{ item.goalDifference}}</td>
                    </tr>
                  </tbody>
                </template>
              </table>
      
      </v-card>
    
  
</v-content>
</template>


<script>
import DutchLeague from '@/assets/data/dutchLeague.json'
export default {
  data() {
    return {
      DutchLeague : DutchLeague 
    };
  }
};
</script>
<style>
.table {
 border-collapse: collapse;
  width: 100%;
}
.text-left {
  padding: 2.2rem;
  text-align: left;
  border: 1px solid #ccc;
  
}
tbody tr:hover {
  background: skyblue;
}
</style>