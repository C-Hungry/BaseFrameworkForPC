<style scoped lang="less">

</style>
<template>
  <div>
    <frame-nav></frame-nav>
    <div v-auth="1">测试</div>
    <div>{{$t('multilevel')}}</div>
    <div>{{$store.state.test.name}}</div>
  </div>
</template>
<script>
export default {
  methods: {
    fetchData() {
      this.$fetch.post('/user/login', {})
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
