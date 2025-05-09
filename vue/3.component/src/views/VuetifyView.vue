<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog" max-width="400" @afterEnter="afterHandler">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps"> Open Dialog </v-btn>
      </template>

      <v-card
        prepend-icon="mdi-map-marker"
        title="Use Google's location service?"
      >
        <v-card-text>
          username<input class="form-control" /><br />
          username<input class="form-control" /><br />
          username<input class="form-control" /><br />
          username<input class="form-control" /><br />
        </v-card-text>
        <template v-slot:actions>
          <button class="btn btn-success" @click="dialog = false">등록</button>
          <v-spacer></v-spacer>

          <v-btn @click="dialog = false"> Disagree </v-btn>

          <v-btn @click="dialog = false"> Agree </v-btn>
        </template>
      </v-card>
    </v-dialog>
    <v-data-table :items="cars"></v-data-table>
    <v-pagination
      :length="200"
      :total-visible="10"
      rounded="circle"
      @update:modelValue="pagingHandler"
      v-model="page"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      page: 2,
      cars: [
        {
          name: "Ford Mustang",
          horsepower: 450,
          fuel: "Gasoline",
          origin: "USA",
          price: 55000,
        },
        {
          name: "Tesla Model S",
          horsepower: 670,
          fuel: "Electric",
          origin: "USA",
          price: 79999,
        },
        {
          name: "BMW M3",
          horsepower: 503,
          fuel: "Gasoline",
          origin: "Germany",
          price: 70000,
        },
        {
          name: "Audi RS6",
          horsepower: 591,
          fuel: "Gasoline",
          origin: "Germany",
          price: 109000,
        },
        {
          name: "Chevrolet Camaro",
          horsepower: 650,
          fuel: "Gasoline",
          origin: "USA",
          price: 62000,
        },
        {
          name: "Porsche 911",
          horsepower: 379,
          fuel: "Gasoline",
          origin: "Germany",
          price: 101000,
        },
        {
          name: "Jaguar F-Type",
          horsepower: 575,
          fuel: "Gasoline",
          origin: "UK",
          price: 61000,
        },
        {
          name: "Mazda MX-5",
          horsepower: 181,
          fuel: "Gasoline",
          origin: "Japan",
          price: 26000,
        },
        {
          name: "Nissan GT-R",
          horsepower: 565,
          fuel: "Gasoline",
          origin: "Japan",
          price: 113540,
        },
        {
          name: "Mercedes-AMG GT",
          horsepower: 523,
          fuel: "Gasoline",
          origin: "Germany",
          price: 115900,
        },
      ],
    };
  },
  methods: {
    afterHandler() {
      //fetch
      console.log("모달 오픈");
    },
    pagingHandler(p) {
      //fetch
      console.log(p, this.page);
    },
  },
};
</script>
