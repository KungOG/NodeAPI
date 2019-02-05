<template>
    <main id="main">
        <header>
            <h1>Order ({{order.length}})</h1>
        </header>
        <section class="menu">
            <h3>Pizzor</h3>
            <menu-item v-for="item in menu.pizzas" :key="item.id" :item="item" />

            <h3>Sallader</h3>
            <menu-item v-for="item in menu.salads" :key="item.id" :item="item" />

            <h3>Drycker</h3>
            <menu-item v-for="item in menu.beverages" :key="item.id" :item="item" />
            <a href="#" class="btn" @click="sendOrder()">Köp!</a>
        </section>
    </main>
</template> 

<script>
import menuItem from '../components/menu-item.vue';

export default {
    name: 'main',
    components: {
        menuItem
    },
    methods: {
        async sendOrder(){
           let resp = await this.$http.post('http://localhost:3000/orders', this.$store.state.order);
           if(resp.status == 200){

           } else {

           }
        }
    },
    computed: {
        menu(){
            return this.$store.state.menu;
        },
        order(){
            return this.$store.state.order;
        }
    },
    beforeMount() {
        this.$store.dispatch('getMenu');
    },
}
</script>

<style lang="scss">
@import '../scss/components';

#menu {

    .menu {
        padding: 1rem;
        
        h2 {
            font-size: 2rem;
            margin: .5rem 0;
        }
    }
}
.btn {
    margin-top: 3rem;
}
</style>
