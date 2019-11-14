<template>
<v-content>
  <v-row justify="center">
      <v-card>
        <v-card-title class="headline" style="background-color:brown; color:white; text-align:center">Italian Serie A</v-card-title>
            <v-simple-table class="table">
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
                    <tr v-for="item in table" :key="item.name">
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
              </v-simple-table>
      
      </v-card>
    
  </v-row>
</v-content>
</template>


<script>

export default {
  data() {
    return {
    
      'table': [
          {
            'position': '1',
            "team": {
                        "id": 674,
                        "name": "Inter Milan",
                        "crestURI": null
                    },
                    "playedGames": 34,
                    "won": 26,
                    "draw": 5,
                    "lost": 3,
                    "points": 83,
                    "goalsFor": 87,
                    "goalsAgainst": 39,
                    "goalDifference": 48
          },
          {
            'position': '2',
            "team": {
                        "id": 674,
                        "name": "Juvebtus",
                        "crestURI": null
                    },
                    "playedGames": 34,
                    "won": 26,
                    "draw": 5,
                    "lost": 3,
                    "points": 83,
                    "goalsFor": 87,
                    "goalsAgainst": 39,
                    "goalDifference": 48
          },
                {
                    "position": 3,
                    "team": {
                        "id": 682,
                        "name": "Roma",
                        "crestURI": null
                    },
                    "playedGames": 34,
                    "won": 22,
                    "draw": 5,
                    "lost": 7,
                    "points": 71,
                    "goalsFor": 72,
                    "goalsAgainst": 38,
                    "goalDifference": 34
                }
                ,
                {
                    "position": 4,
                    "team": {
                        "id": 682,
                        "name": "Lazio",
                        "crestURI": null
                    },
                    "playedGames": 34,
                    "won": 22,
                    "draw": 5,
                    "lost": 7,
                    "points": 71,
                    "goalsFor": 72,
                    "goalsAgainst": 38,
                    "goalDifference": 34
                }
                  ,
                {
                    "position":5 ,
                    "team": {
                        "id": 682,
                        "name": "Ac Milan",
                        "crestURI": null
                    },
                    "playedGames": 34,
                    "won": 22,
                    "draw": 5,
                    "lost": 7,
                    "points": 71,
                    "goalsFor": 72,
                    "goalsAgainst": 38,
                    "goalDifference": 34
                }
        ]
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