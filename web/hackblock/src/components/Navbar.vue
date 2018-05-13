<template>
    <div id="nav">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.667 47.625" preserveAspectRatio="none" id="navbar-svg"><path d="M0 0c14.995 8.81 29.848 9.401 44.866 10.734 50.449 4.478 98.55-20.17 166.8-5.442v42.333H0z" :fill="setNavColor" paint-order="fill markers stroke"/></svg>

        <ul class="navlist">
            <li class="navlink"><router-link to="/">Home <home class="icon"></home></router-link></li>
        </ul>
    </div>
</template>


<script>
    import Dumbbell from '../assets/icons/dumbbell.svg';
    import Home from '../assets/icons/home.svg';
    import Store from '../assets/icons/store.svg';
    import Swords from '../assets/icons/sword-cross.svg';
    import TV from '../assets/icons/television-classic.svg';
    import NavbarWave from '../assets/navbar-wave.svg';

    export default {
        name: 'NavComponent',
        computed: {
            setNavColor(){
                return "#faa";
            }
        },
        components: {
            'dumbbell': Dumbbell,
            'home': Home,
            'marketplace': Store,
            'fight': Swords,
            'watch': TV,
            'wave': NavbarWave
        }
    }
</script>

<style lang="scss" scoped>

    #nav{
        background-color: transparent;
        bottom: 0;
        position: absolute;
        width: 100vw;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .navlist{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        z-index: 0;
    }

    .navlink{
        text-decoration: none;
        color: white;
        display: block;
        a {
            text-decoration: none;
        }
    }

    #navbar-svg {
        width: 100vw;
        height: 20vh;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
    }

    .icon {
        fill: white;
    }
</style>
