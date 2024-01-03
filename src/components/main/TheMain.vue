<template>
    <div>
        <v-row>
            <v-col class="d-flex justiy-content align-center" cols="12">
                <v-btn @click="createMeeting">ساخت قرار ملاقات جدید</v-btn>
            </v-col>
        </v-row>
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
        <create-meeting @submitMeeting="handleSubmitMeeting" v-bind:dialog.sync="createMeetingDialoge"></create-meeting>
    </div>
</template>
<script>
import CardsList from './CardsList.vue'
import CreateMeeting from './CreateMeeting.vue'
export default {
components:{CardsList,CreateMeeting},
data(){
    return {
        createMeetingDialoge: false,
    }
},
methods:{
    createMeeting(){
        this.createMeetingDialoge = true
    },
    handleSubmitMeeting(meeting){
        this.$store.dispatch('createMeeting', meeting).finally(this.createMeetingDialoge=false)
    }
},
computed:{
    fixedItems(){
        return [{
            name: "some"
        }]
    },
    ongoingItems(){
        return[ {
            name: "some"
        }]
    },
    invitedItems(){
        return[
        {
            name: "some"
        }]
    }
}
}
</script>
