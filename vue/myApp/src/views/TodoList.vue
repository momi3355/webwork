<script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {},
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) => (this.tasks = response.filter((t) => t.id <= 5)));
  },
};
</script>

<template>
  <div id="myDIV" class="header">
    <h2 style="margin: 5px">My To Do List</h2>
    <input type="text" id="myInput" placeholder="Title..." />
    <span onclick="" class="addBtn">Add</span>
  </div>

  <ul id="myUL">
    <li v-for="item in tasks" :class="{ checked: item.completed }">
      {{ item.title }}
    </li>
    <!-- <li>Hit the gym</li>
    <li class="checked">Pay bills</li>
    <li>Meet George</li>
    <li>Buy eggs</li>
    <li>Read a book</li>
    <li>Organize office</li> -->
  </ul>
</template>

<style scoped>
/* (scoped) 이 안에서만 사용가능 */
body {
  margin: 0;
  min-width: 250px;
}

/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
#myUL {
  margin: 0;
  padding: 0;
}

/* Style the list items */
#myUL li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
#myUL li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
#myUL li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
#myUL li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
#myUL li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
#myUL .close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

#myUL .close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
#myDIV {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
#myDIV:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
#myDIV input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
#myDIV .addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

#myDIV .addBtn:hover {
  background-color: #bbb;
}
</style>
