import vueBlogEditor from './TopEditor.vue'
import TopPreview from './TopPreview.vue'
const version = '0.0.1'
const components  = [vueBlogEditor, TopPreview]
const install = function(Vue) {
  if (install.installed) return;

  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export {
	vueBlogEditor, 
	TopPreview 
}
export default {
	install,
  version
}