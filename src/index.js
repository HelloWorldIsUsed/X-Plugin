import XwBtn from './XwBtn.vue'
import XSlider from './XSlider.vue'
import XLeftNav from './XLeftNav.vue'
 
const xPlguin = {
    install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
     Vue = window.Vue
    }
    Vue.component('xwbtn', XwBtn)
    Vue.component('xSlider', XSlider)
    Vue.component('xLeftNav',XLeftNav)
    }
}
 
export default xPlguin