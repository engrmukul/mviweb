<template>
  <div>
    <h1>Insurance List</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2"></div>
    </div>
    <br />

    <table class="table table-hover">
      <thead>
        <tr>
          <th>VehicleNumber</th>
          <th>CurrentStatus</th>
          <th>CICN</th>
          <th>ExpireyDate</th>
          <th>CCFNI</th>
          <th>createdAt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="insurance in insurances" :key="insurance.id">
          <td>{{ insurance.VehicleNumber }}</td>
          <td>{{ insurance.CurrentStatus }}</td>
          <td>{{ insurance.CICN }}</td>
          <td>{{ insurance.ExpireyDate }}</td>
          <td>{{ insurance.CCFNI }}</td>
          <td>{{ insurance.createdAt }}</td>
          <td>
            <router-link
              :to="{ name: 'edit', params: { id: insurance.id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
          <td>
            <button
              class="btn btn-danger"
              @click.prevent="deleteInsurance(insurance.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      insurances: []
    };
  },

  created() {
    let uri = "http://localhost:8081/api/insurances";
    this.axios.get(uri).then(response => {
      this.insurances = response.data.data;
    });
  }

  // methods: {
  //   deleteCompany(id)
  //   {
  //         let uri = `http://localhost:8081/company/delete/${id}`;
  //         this.axios.delete(uri).then(response => {
  //         this.companies.splice(this.companies.indexOf(id), 1);
  //     });
  //   }
  // }
};
</script>
