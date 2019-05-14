import Vue from 'vue';

// 验证权限，控制是否显示
Vue.directive('auth', {
  inserted: (el,binding,vnode)=>{
    try {
      if(vnode.context.$store.getters.permissions.some(item => item.permission == binding.value)) {
       el.style.display = "";
      } else {
        el.style.display = "none";
      }
    } catch (error) {
      console.warn(error);
    }
  }
});