<template>
    <div>    
        <v-dialog max-width="600" v-model="internalDialog">
            <v-form @submit.prevent="submitNewMeeting" ref="createMeetingForm">
                <v-card>
                    <v-card-text>
                        <v-row v-if="step == 0">
                            <v-col cols="12" lg="6" md="6">
                                <v-text-field
                                v-model="newMeeting.title"
                                label="عنوان"></v-text-field>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                                <v-text-field
                                v-model="newMeeting.url"
                                label="لینک"></v-text-field>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                                <v-text-field
                                v-model="newMeeting.location"
                                label="مکان"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row v-if="step == 1">
                            <v-col cols="6">
                                <v-text-field
                                v-model="invitedEmail"
                                label="ایمیل دعوت شده"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-btn @click="addEmail">اضافه</v-btn>
                            </v-col>
                            <v-col cols="12">
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-center">
                                                    ایمیل
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in newMeeting.invitedEmails" :key="index">
                                                <td>{{ item }}</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-col>
                        </v-row>
                        <v-row v-if="step==2">
                            <v-col cols="4">
                                <v-btn @click="openCalender=true"></v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12">
                                <v-btn @click="nextStep" color="orange">بعد</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>
        <the-calender
        v-bind:dialog.sync="openCalender"
         @submitDate="handleSubmitDate"></the-calender>
    </div>
</template>
<script>
import TheCalender from '../TheCalender.vue'
export default{
    components:{TheCalender},
    emits: ['submitMeeting','update:dialog'],
    props:{
        dialog: {
            type: Boolean,
            default: false,
            
        }
    },
    data(){
        return {
            invitedEmail:'',
            openCalender:false,
            newMeeting:{
            title: '',
            url: '',
            location: '',
            suggestedTime: '',
            invitedEmails:[]},
            internalDialog: this.dialog,
            step:0
        }
    },methods:{
        submitNewMeeting(){
            //submit meeting creation logic
            this.$emit('submitMeeting',this.newMeeting)
            this.$emit('update:dialog', false);
        },
        nextStep(){
            switch(this.step) {
                case 0: {
                    //ToDo: validate form
                    this.step = 1;
                }
                break;
                case 1:{
                    //ToDo: validate form
                    this.step = 2;
                }
                break;
            }
        },
        addEmail(){
            this.newMeeting.invitedEmails.push(this.invitedEmail)
            this.invitedEmail = ''
        },
        handleSubmitDate(){

        }
    }
    ,
    watch:{
        dialog(newValue) {
            this.internalDialog = newValue; // Update internal state when prop changes
        }
    }
    }

</script>
