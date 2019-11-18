
<template>
  <div>
    <h1>Insurance Company</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'create' }" class="btn btn-primary"
          >Create</router-link
        >
      </div>
    </div>
    <br />

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Company</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in companies.data" :key="company.id">
          <td>{{ company.CompanyName }}</td>
          <td>{{ company.Phone }}</td>
          <td>{{ company.Email }}</td>
          <td>{{ company.Address }}</td>
          <td>
            <router-link
              :to="{ name: 'edit', params: { id: company.id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
          <td>
            <button
              class="btn btn-danger"
              @click.prevent="deleteCompany(company.id)"
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
      companies: []
    };
  },

  created() {
    let uri = "http://localhost:8081/api/insurance";
    this.axios.get(uri).then(response => {
      this.companies = response.data;
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
