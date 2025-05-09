<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input type="text" id="id" readonly :value="book.id" />

      <label for="title">제목</label>
      <input type="text" id="title" v-model="book.title" />

      <label for="description">부제</label>
      <input type="text" id="description" v-model="book.description" />

      <label for="writer">작가</label>
      <input type="text" id="writer" v-model="book.writer" />

      <label for="publish">출판사</label>
      <input type="text" id="publish" v-model="book.publish" />

      <label for="isbn">ISBN</label>
      <input type="text" id="isbn" v-model="book.isbn" />

      <label for="price">가격</label>
      <input type="text" id="price" v-model="book.price" />

      <label for="image_select">이미지 종류</label>
      <select name="image_select" id="image_select" v-model="imageItem">
        <option v-for="select in imageSelect" :value="select.value">
          {{ select.text }}
        </option>
      </select>

      <div v-if="imageItem === 'url'">
        <label for="image_url">이미지 URL</label>
        <input type="text" id="image_url" v-model="book.image" />
      </div>
      <div v-else-if="imageItem === 'file'">
        <label for="image_file">이미지 파일</label><br />
        <input
          type="file"
          id="image_file"
          accept="image/png, image/jpeg"
          @change="onFileChange($event.target.files)"
        />
        <div class="image_preview">
          <img id="preview" height="100%" />
        </div>
      </div>

      <label for="created_date">작성일자</label>
      <input
        type="text"
        id="created_date"
        readonly
        :value="book.created_date"
      />

      <button
        type="button"
        class="btn btn-xs btn-info"
        @click="updateBookHeadler"
      >
        저장
      </button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const book = ref({});
const imageSelect = reactive([
  {
    value: "none",
    text: "없음",
  },
  {
    value: "url",
    text: "URL",
  },
  {
    value: "file",
    text: "파일",
  },
]);
const imageItem = ref(imageSelect[0].value);
const imagefile = ref({});

function base64(file) {
  // 비동기적으로 동작하기 위하여 promise를 return 해준다.
  return new Promise((resolve) => {
    const reader = new FileReader();
    // load 이벤트 핸들러. 리소스 로딩이 완료되면 실행됨.
    reader.onload = (e) => {
      resolve(e.target.result);
      const previewImage = document.getElementById("preview");
      previewImage.src = e.target.result;
    }; // ref previewImage 값 변경

    // 컨텐츠를 특정 file에서 읽어옴. 읽는 행위가 종료되면 loadend 이벤트 트리거함
    // & base64 인코딩된 스트링 데이터가 result 속성에 담김
    reader.readAsDataURL(file);
  });
}

const updateBookHeadler = async () => {
  if (book.value) {
    const id = book.value.id;
    if (id) {
      // const value = book.value;
      // const data = {
      //   title: value.title,
      //   description: value.description,
      //   writer: value.writer,
      //   publish: value.publish,
      //   isbn: value.isbn,
      //   price: value.price,
      //   image: value.image,
      // };
      const result = await axios.put(`/api/bookinfo/${id}`, book.value);
      console.log(result.data);
      alert("도서 정보가 수정 되었습니다.");
    } else {
      const result = await axios.post(`/api/bookinfo`, book.value);
      console.log(result.data);
      alert("도서 정보가 추가 되었습니다.");
    }
    if (imagefile) {
      //파일 업로드 로직
      // axios({
      //   url: "/api/imagesave/",
      //   method: "POST",
      //   headers: { "Content-Type": "multipart/form-data" },
      //   data: imagefile,
      // })
      //   .then((res) => {
      //     console.log(res.data.message);
      //   })
      //   .catch((err) => {
      //     alert(err);
      //   });
    }
    router.push({ path: "/" });
  }
};
const onFileChange = async (files) => {
  imagefile = files[0];
  await base64(files[0]);
};

onBeforeMount(async () => {
  const id = route.query.id;
  if (id) {
    const result = await axios.get(`/api/bookinfo/${id}`);
    book.value = result.data[0];
  }
});
</script>

<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type="button"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type="button"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.image_preview {
  padding: 20px;
  height: 200px;
}
</style>
