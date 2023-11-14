<script>
    import PageMenu from './PageMenu.vue';
    import {store} from '../store';

    export default {
        data() {
            return {
                store: store,
                event: 'input',
            }
        },
        components: {
            PageMenu,
        },
        computed: {
            headerMenu() {
                return this.store.headerMenu.links;
            },
            isActiveInput() {
                return this.store.isActiveInput;
            },
            searchText() {
                return this.store.searchText;
            },
        },
        methods: {
            getActiveInput() {
                console.log("active")
                const ref = this.$refs.name
                setTimeout(this.getFocusInput(ref), 1000)
                if(!this.store.isActiveInput) {
                    return this.store.isActiveInput = !this.store.isActiveInput
                }
            },
            getFocusInput(ref) {
               return ref.focus()
            },
            clearSearchText() {
                return this.store.searchText = "";
            }
        }
    }
</script>

<template>
    <div class="app-header">
        <div class="container">
            <div class="row">
                <div class="col"><div class="logo">BOOLFIX</div></div>
                <div class="col">
                    <div class="header-menu"><PageMenu :links="headerMenu"/></div>
                </div>
                <div class="col secondary-navigation">
                    <div 
                        class="nav-element search-bar" 
                        @click.stop="getActiveInput()"
                        :class="{'active' : isActiveInput}"
                    >   
                        <a class="search-bar__icon">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </a> 
                        <input 
                            type="text" 
                            placeholder="Movies o TV Show"
                            v-model="store.searchText"
                            @[event]="$emit('performSearch')"
                            ref="name"  
                        > 
                        <a class="search-bar__xmark" :class="{'active' : searchText.length > 0}" @click.stop="clearSearchText()">
                            <font-awesome-icon icon="fa-solid fa-xmark" />
                        </a>    
                    </div>
                    <div class="nav-element notification-bell">
                        <a href="#">
                            <font-awesome-icon icon="fa-regular fa-bell" />
                        </a>
                    </div>
                    <div class="nav-element account-menu">
                        <a href="#">
                            <font-awesome-icon icon="fa-regular fa-user" />
                        </a>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>
  
<style lang="scss">
    @use '../components/style/partial/varibils' as *;

    .app-header {
        background-color: $bg-header;
        color: $f-color-base;
        padding: $p-base;
        position: fixed;
        z-index: 50;
        width: 100%;
        a:hover,
        a:hover * {
            color: white;
            font-weight: 500;
            text-shadow: 2px 2px 4px #ffffff;
        }
        .row {
            align-items: center;
            .header-menu ul.menu {
                display: flex;
                gap: 10px;
            }
            .col.secondary-navigation {
                display: flex;
                margin-left: auto;
                align-items: center;
                gap: 15px;
                font-size: 24px;
                .search-bar {
                    display: flex;
                    align-items: center;
                    line-height: 40px;
                    width: 24px;

                    input {
                        border: none;
                        background-color: rgba(0, 0, 0, 0.699);
                        line-height: 36px;
                        font-size: 16px;
                        width: 0px;
                        color: $f-color-base;
                        opacity: 0;
                        outline: none;
                    }

                    &.active {
                        background-color: black;
                        border: 1px solid white;
                        transition: 0.6s;
                        width: 300px;
                        padding: 0 10px;
                        input {
                            opacity: 100;
                            display: block;
                            transition: 0.6s;
                            width: 250px;
                            padding: 0px 10px;
                        }
                    }
                    .search-bar__icon {
                        font-size: 24px;
                        color: $f-color-base;
                        cursor: pointer;
                    }
                    .search-bar__xmark {
                        font-size: 24px;
                        color: $f-color-base;
                        display: none;
                        cursor: pointer;
                    }
                    .search-bar__xmark.active {
                        display: block;
                    }
                }
                .notification-bell,
                .account-menu {
                    cursor: pointer;
                }
            }
        }
        .logo {
            color: $logo-color;
            font-size: 36px;
            font-weight: bold;
        }
    }

</style>
