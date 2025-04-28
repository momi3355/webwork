<script>
export default {
  data() {
    return {
      targetDt: "20200420",
      movies: [],
    };
  },
  methods: {
    select() {
      fetch(
        "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt=" +
          this.targetDt
      )
        .then((response) => response.json())
        .then((response) => {
          this.movies = response.boxOfficeResult.dailyBoxOfficeList;
        });
      //console.log(this.movies);
    },
  },
  mounted() {
    this.select();
    console.log(this);
  },
};
</script>

<template>
  <button @click="select()">조회</button>
  <input type="text" v-model="targetDt" @keyup.enter="select()" />

  <ul id="myUL">
    <table>
      <thead>
        <tr>
          <th>순위</th>
          <th>영화이름</th>
          <th>상영일</th>
          <th>누적관객수</th>
          <th>관객수</th>
        </tr>
      </thead>
      <tbody>
        <!-- rank, movieNm, showCnt -->
        <tr v-for="m in movies">
          <td>{{ m.rank }}</td>
          <td>{{ m.movieNm }}</td>
          <td>{{ m.openDt }}</td>
          <td>{{ m.audiAcc }}</td>
          <td>{{ m.audiCnt }}</td>
        </tr>
      </tbody>
    </table>
  </ul>
</template>

<style></style>
