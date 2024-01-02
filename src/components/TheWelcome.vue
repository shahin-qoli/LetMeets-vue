<template>
    <div>
        <v-row>
            <v-col cols="12" md="4" lg="4"  class="login-section">
                <the-login></the-login>
            </v-col>
            <v-col cols="8">
                The Welcome
            </v-col>
        </v-row>
    </div>
</template>

<script>
import TheLogin from './TheLogin.vue'
export default  {
components:{TheLogin},

}
</script>
<style scoped>
.login-section {
    display: inline-flex;
    flex-grow: 1;
    justify-content: center;
}
</style>