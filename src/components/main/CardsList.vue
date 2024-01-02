<template>
    <div>
        <v-sheet>
            <v-row>
                <v-col cols="12">
                    <h1>ملاقات های </h1>
                </v-col>
                <v-col cols="12">
                    <v-card :key="index" v-for="(item, index) in items">
                        {{ item }}
                    </v-card>
                </v-col>
            </v-row>
            
        </v-sheet>
    </div>
</template>
<script>
export default{
    props:{
        items:{
            type: Object,
            required: true
        }
    }
}
</script>
