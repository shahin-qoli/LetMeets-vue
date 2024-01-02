<template>
    <div>
        <v-row>
            <v-col cols="12" lg="4" md="4">
                <cards-list :items="invitedItems">

                </cards-list>
            </v-col>
            <v-col cols="12" lg="4" md="4">
                <cards-list :items="ongoingItems">
                    
                </cards-list>
            </v-col>
            <v-col cols="12" lg="4" md="4">
                <cards-list :items="fixedItems">
                    
                </cards-list>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import CardsList from './CardsList.vue'
export default {
components:{CardsList},
data(){
    return {

    }
},
methods:{},
computed:{
    fixedItems(){},
    ongoingItems(){},
    invitedItems(){}
}
}
</script>
