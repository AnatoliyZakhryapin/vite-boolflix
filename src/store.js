import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    movies: [],
    series: [],
    moviesGenresList: [],
    TVGenresList: [],
    headerMenu: {
        links: [
            {
                text: "Home",
                href: "#"
            },
            {
                text: "TV Shows",
                href: "#"
            },
            {
                text: "Movies",
                href: "#"
            },
            {
                text: "New & Popular",
                href: "#"
            },
            {
                text: "My List",
                href: "#"
            },
            {
                text: "Browse by Languages",
                href: "#"
            },
        ]
    },
    isActiveInput: false,
})

