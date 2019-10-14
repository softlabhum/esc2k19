<template>
  <div class="wrap">
    <h1>테스트 페이지</h1>
    <ul class="test">
      <li v-for="test in tests" class="item">
        <span class="id">{{test.id}}</span>
        <div class="detail">
          <strong class="tit">{{test.name}}</strong>
          <span class="age">나이 <span class="num">{{test.age}}</span></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created () {
    // 컴포넌트가 생성될 때, /api/movies에 요청을 보냅니다.          
    this.$http.get('/api/tests')
        .then((response) => {
          this.tests = response.data
        })
  },
  data () {
    return {
      tests: []
    }
  }
}
</script>