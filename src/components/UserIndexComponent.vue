<template>
  <div>
    <h1>Insurance User List</h1>
    <div class="row">
      <div class="col-md-10"></div>
      
    </div>
    <br />

    <table class="table table-hover">
      <thead>
        <tr>
          <th>VehicleNumber</th>
          <th>FullName</th>
          <th>FathersName</th>
          <th>MothersName</th>
          <th>DateOfBirth</th>
          <th>MobileNumber</th>
          <th>Email</th>
          <th>Address</th>
          <th>DivisionId</th>
          <th>DistrictId</th>
          <th>ThanaId</th>
          <th>PostCode</th>
          <th>UploadPicture</th>
          <th>Lat</th>
          <th>Long</th>
          <th>createdAt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.VehicleNumber }}</td>
          <td>{{ user.FullName }}</td>
          <td>{{ user.FathersName }}</td>
          <td>{{ user.MothersName }}</td>
          <td>{{ user.DateOfBirth }}</td>
          <td>{{ user.MobileNumber }}</td>
          <td>{{ user.Email }}</td>
          <td>{{ user.Address }}</td>
          <td>{{ user.DivisionId }}</td>
          <td>{{ user.DistrictId }}</td>
          <td>{{ user.ThanaId }}</td>
          <td>{{ user.PostCode }}</td>
          <td>{{ user.UploadPicture }}</td>
          <td>{{ user.Lat }}</td>
          <td>{{ user.Long }}</td>
          <td>{{ user.createdAt }}</td>
          <td>
            <router-link
              :to="{ name: 'edit', params: { id: user.id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="deleteuser(user.id)">
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
      users: []
    };
  },

  created() {
    let uri = "http://localhost:8081/api/users";
    this.axios.get(uri).then(response => {
      this.users = response.data.data;
    });
  }

  // methods: {
  //   deleteuser(id)
  //   {
  //         let uri = `http://localhost:8081/company/delete/${id}`;
  //         this.axios.delete(uri).then(response => {
  //         this.companies.splice(this.companies.indexOf(id), 1);
  //     });
  //   }
  // }
};
</script>
