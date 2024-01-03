<template>
    <v-dialog v-model="internalDialog">
        <v-form @submit.prevent="submitNewMeeting">
            <v-row>
                <v-col cols="3">
                    <v-text-field
                    v-model="newMeeting.title"
                    label=""></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field
                    v-model="newMeeting.url"
                    label=""></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field
                    v-model="newMeeting.location"
                    label=""></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field
                    v-model="invitedEmail"
                    label=""></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field
                    v-model="newMeeting.suggestedTime"
                    label=""></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-btn type="submit" color="orange">ثبت</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-dialog>
</template>
<script>
export default{
    emits: ['submitMeeting','update:dialog'],
    props:{
        dialog: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            invitedEmail:'',
            newMeeting:{
            title: '',
            url: '',
            location: '',
            suggestedTime: '',
            invitedEmails:[]},
            internalDialog: this.dialog
        }
    },methods:{
        submitNewMeeting(){
            //submit meeting creation logic
            this.$emit('submitMeeting',this.newMeeting)
            this.$emit('update:dialog', false);
        }
    }
    ,
    watch:{
        invitedEmail(newValue){
            if (newValue != "")
            this.newMeeting.invitedEmails.push(newValue)
            ,this.invitedEmail=""
        },
        dialog(newValue) {
            this.internalDialog = newValue; // Update internal state when prop changes
        }
    }
    }

</script>
