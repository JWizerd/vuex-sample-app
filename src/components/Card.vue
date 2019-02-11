<template>
    <article class="country-card">
        {{country.name}}
        <div class="right">
            <strong>
                <small class="icon icon--red" @click="click">
                    DELETE
                </small>
            </strong>
        </div>
        <h1>
            <strong>{{country.alpha2Code}}</strong> {{country.name}}
        </h1>
        <hr>
        <p>{{country.capital}}</p>
        <div v-for="data in country.currencies">
            <p>{{data.code}}</p>
            <p>{{data.name}}</p>
            <p>{{data.symbol}}</p>
        </div>
    </article>
</template>

<style>
    .icon--red {
        color: red;
    }
    .right {
        float: right;
    }
</style>

<script>
export default {
    name: 'card',
    props: ['country', 'index'],
    methods: {
        click: function() {
            this.$store.commit('deleteCountry', this.index)
        }
    }
}
</script>