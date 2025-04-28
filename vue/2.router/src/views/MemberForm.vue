<script>
export default {
  data() {
    return {
      message: "",
      checked: true,
      checkedNames: [],
      picked: "둘",
      options: [
        {
          text: "가",
          value: "A",
        },
        {
          text: "나",
          value: "B",
        },
        {
          text: "다",
          value: "C",
        },
        {
          text: "마",
          value: "E",
        },
      ],
      selected: ["A", "C"],
    };
  },
  methods: {
    memberInsert() {
      alert("회원가입완료");
      this.$router.push("/"); //home으로 이동
    },
  },
};
</script>

<template>
  <p>메세지: {{ message }}</p>
  <input v-model="message" placeholder="메세지 입력하기" />

  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div>
    체크된 이름:
    <span v-if="checkedNames.length > 0">{{ checkedNames }}</span>
    <span v-else></span>
  </div>
  <input type="checkbox" id="jack" value="젝" v-model="checkedNames" />
  <label for="jack">젝</label>
  <input type="checkbox" id="john" value="존" v-model="checkedNames" />
  <label for="john">존</label>
  <input type="checkbox" id="mike" value="마이크" v-model="checkedNames" />
  <label for="mike">마이크</label>

  <div>선택한 것: {{ picked }}</div>
  <input type="radio" id="one" value="하나" v-model="picked" />
  <label for="one">하나</label>
  <input type="radio" id="two" value="둘" v-model="picked" />
  <label for="two">둘</label>

  <div>선택됨: {{ selected }}</div>
  <select v-model="selected" multiple>
    <option disabled value="">다음 중 하나를 선택하세요</option>
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <br />
  <button @click="memberInsert">등록</button>
</template>

<style></style>
