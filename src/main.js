import { createApp } from 'vue'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { 
// } from '@fortawesome/free-brands-svg-icons'
import { 
	faStar as fasStar,
	faMagnifyingGlass as fasMagnifyingGlass,
	faXmark as fasXmark
} from '@fortawesome/free-solid-svg-icons'
import {
    faStar as farStar,
	faBell as farBell,
	faUser as farUser
	} from '@fortawesome/free-regular-svg-icons'

library.add(
	fasStar,
    farStar,
	fasMagnifyingGlass,
	fasXmark,
	farBell,
	farUser
	)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
