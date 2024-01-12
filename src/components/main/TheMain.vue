<template>
    <div>
        <v-row>
            <v-col class="d-flex justiy-content align-center" cols="12">
                <v-btn @click="createMeeting">ساخت قرار ملاقات جدید</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <!-- <v-col cols="12" lg="4" md="4">
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
            </v-col> -->
        </v-row>
        <create-meeting @submitMeeting="handleSubmitMeeting" v-bind:dialog.sync="createMeetingDialoge"></create-meeting>
    </div>
</template>
<script>
// import CardsList from './CardsList.vue'
import CreateMeeting from './CreateMeeting.vue'
/**
 * The default export contains the component definition for TheMain.
 *
 * It registers the CreateMeeting component and defines data, methods
 * and computed properties.
 *
 * The data returns an object with the createMeetingDialoge property to
 * track if the dialog is open.
 *
 * The methods allow opening and closing the dialog, and handle submitting
 * the meeting data.
 *
 * The computed properties return mocked data for the meeting item lists.
 */
export default {
  components: { CreateMeeting },
  data() {
    return {
      createMeetingDialoge: false,
    };
  },
  methods: {
    createMeeting() {
      this.createMeetingDialoge = true;
    },
    handleSubmitMeeting(meeting) {
      this.$store
        .dispatch("createMeeting", meeting)
        .then(() => (this.createMeetingDialoge = false));
    },
  },
  computed: {
    fixedItems() {
      return {
        name: "some",
      };
    },
    ongoingItems() {
      return {
        name: "some",
      };
    },
    invitedItems() {
      return {
        name: "some",
      };
    },
  },
};
</script>
