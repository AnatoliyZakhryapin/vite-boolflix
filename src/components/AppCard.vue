<script>
import LangFlag from 'vue-lang-code-flags'
import { store } from '../store'

export default {
    data() {
        return {
            posterURL: "https://image.tmdb.org/t/p/",
            sizePoster: "w342",
            genrsName: [],
            store: store
        }   
    },  
    components: {
        LangFlag
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        title() {
            if(this.item.title) {
                return this.item.title
            } else if (this.item.name) {
                return this.item.name
            }
        },
        titleOrigin() {
            if(this.item.original_title) {
                return this.item.original_title
            } else if (this.item.original_name) {
                return this.item.original_name
            }
        },
        language() {
            return this.item.original_language
        },
        vote() {
            let  voteRound;
            if(this.item.vote_average) {
                voteRound = Math.round(this.item.vote_average / 2 )
            } else {
                voteRound = 0;
            }
            return voteRound;
        },
        poster_path() {
            return this.item.poster_path
        },
        overview() {
            return this.item.overview;
        },
        genre_ids() {
            return this.item.genre_ids;
        },
        moviesGenresList() {
            return this.store.moviesGenresList;
        },
        TVGenresList() {
            return this.store.TVGenresList;
        },
        filtrGenresList() {
            return this.store.filtrGenresList;
        }
    },
    methods: {
        getPosterPathComplete(size) {
            const pathComplete = this.posterURL + size + this.poster_path
            return pathComplete;
        },
        icon() {
            let icon = []
            for(i = 0; i < this.vote; i++) {
                icon.puch('<font-awesome-icon icon="fa-solid fa-star"')
            }   
        },
        getCicleForStar() {
            let qtyCicle;
            if(this.vote === 0) {
                qtyCicle = 5;
            } else {
                qtyCicle = 5 - this.vote;
            }
            return qtyCicle;
        },
        sliceOverview() {
            const text = this.overview;
            const textSlice = text.slice(0, 200);
            const textToStamp = textSlice + "..."
            return textToStamp;
        },
        getGenrsNameToCard() {
            console.log(this.item.title)
            console.log(this.item.name)
            if(this.item.title) {
                for(let i = 0; i < this.moviesGenresList.length; i++ ){
                    for(let x = 0; x < this.genre_ids.length; x++){
                        if(this.moviesGenresList[i].id === this.genre_ids[x]) {
                            this.genrsName.push( this.moviesGenresList[i])
                        }
                    }
                }
            } else if (this.item.name) {
                for(let i = 0; i < this.TVGenresList.length; i++ ) {
                    for(let x = 0; x < this.genre_ids.length; x++) {
                        if(this.TVGenresList[i].id === this.genre_ids[x]) {
                            this.genrsName.push(this.TVGenresList[i])
                        }
                    }
                }
            }
        },
        getGenNumber(index) {
            const number = index + 1;
            return number;
        },
        pushGenersNameToFiltrArray() {
            for(let i = 0; i < this.genrsName.length; i++){
                if(!this.filtrGenresList.includes(this.genrsName[i].name)){
                    this.filtrGenresList.push(this.genrsName[i].name)
                }
            }     
        }
    },
    created() {
        this.getGenrsNameToCard()
        // this.pushGenersNameToFiltrArray()
    },
    mounted() {
        // this.pushGenersNameToFiltrArray();
    }
}
</script>

<template>
    <div class="card-preview">
        <div class="card-poster">
            <figure class="poster">
                <img :src="getPosterPathComplete('w342')">
            </figure>
        </div>
        <div class="card">
            <div class="card-body">
                <ol>
                    <li>Title: {{ title }}</li>
                    <li>Original title: {{ titleOrigin }}</li>
                    <li class="language">
                        <span class="language-icon">Lingua: <lang-flag :iso='language' :title='language'/>
                            
                        </span>
                        <span class="language-text">Lingua: {{ language.toUpperCase() }}</span>
                    </li>
                    <li class="vote">
                        Voto:
                        <span class="vote-star">
                            <font-awesome-icon icon="fa-solid fa-star"  v-for="n in vote"/>
                        </span>
                        <span class="not-vote-star">
                            <font-awesome-icon icon="fa-regular fa-star"  v-for="n in getCicleForStar()"/>
                        </span>
                    </li>
                    <li class="overview">Overview: {{ sliceOverview() }} </li>
                    <li class="genrs">
                        <ul>
                            <li v-for="(genr, i ) in genrsName">
                                Geners {{ getGenNumber(i) }}: {{ genr.name }}
                            </li>
                        </ul>
                    </li>
                </ol>
        </div>
        </div>
    </div>
</template>
<span></span>

<style lang="scss">
    @use './style/partial/varibils' as *;
    .card-preview {
        color: $f-color-base;
        flex-grow: 1;
        position: relative;
        display: flex;
        &:hover .card{
                z-index: 1;
            }
        &:hover .poster{
                /* filter: brightness(0.4); */
            filter: blur(3.5px);
            opacity: 0.5;
        }
        .card-poster {
            display: flex;
            .poster {
                display: flex;
               
            }
        }

        .card {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            font-size: 14px;
            z-index: -1;
            .card-body {
                padding: 10px;
                & ol {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;

                    .language {
                        span.language-icon:has(> span.flag-icon-undefined) { 
                            display: none;
                        }
                        .language-text {
                            display: none;
                        }  
                        span.language-icon:has(> span.flag-icon-undefined)+.language-text { 
                            display: block;
                        }
                    } 
                }
            }
             
        }
        
    }
</style>-
