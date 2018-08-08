import XwBtn from './XwBtn.vue'
 
const xwbtn = {
 install: function (Vue) {
 if (typeof window !== 'undefined' && window.Vue) {
  Vue = window.Vue
 }
 Vue.component('xwbtn', XwBtn)
 }
}
 
export default xwbtn