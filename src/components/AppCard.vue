<script>
import LangFlag from 'vue-lang-code-flags'

export default {
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
            return this.item.vote_average
        },
    }
}
</script>

<template>
    <div class="card">
        <ol>
            <li></li>
            <li>{{ title }}</li>
            <li>{{ titleOrigin }}</li>
            <li class="language">
                <span class="language-icon">Lingua: <lang-flag :iso='language' :title='language'/>
                    
                </span>
                <span class="language-text">Lingua: {{ language.toUpperCase() }}</span>
            </li>
            <li>{{ vote }}</li>
        </ol>
    </div>
</template>
<span></span>

<style lang="scss">
    @use './style/partial/varibils' as *;
    .card {
        color: $f-color-base;
        padding: 10px;
        border: 1px solid white;
        flex-grow: 1;

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
</style>
