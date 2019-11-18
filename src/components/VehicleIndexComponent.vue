<template>
  <div>
    <h1>Insurance Company</h1>
    <div class="row">
      <div class="col-md-10"></div>
    </div>
    <br />

    <table class="table table-hover">
      <thead>
        <tr>
          <th>VehicleNumber</th>
          <th>VehicleType</th>
          <th>ManufacturerName</th>
          <th>ModelName</th>
          <th>YearManufacturer</th>
          <th>EngineNumber</th>
          <th>ChasisNumber</th>
          <th>CC</th>
          <th>Color</th>
          <th>SeatingCapacity</th>
          <th>createdAt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehicle in vehicles" :key="vehicle.id">
          <td>{{ vehicle.VehicleNumber }}</td>
          <td>{{ vehicle.VehicleType }}</td>
          <td>{{ vehicle.ManufacturerName }}</td>
          <td>{{ vehicle.ModelName }}</td>
          <td>{{ vehicle.YearManufacturer }}</td>
          <td>{{ vehicle.EngineNumber }}</td>
          <td>{{ vehicle.ChasisNumber }}</td>
          <td>{{ vehicle.CC }}</td>
          <td>{{ vehicle.Color }}</td>
          <td>{{ vehicle.SeatingCapacity }}</td>
          <td>{{ vehicle.createdAt }}</td>
          <td>
            <router-link
              :to="{ name: 'edit', params: { id: vehicle.id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
          <td>
            <button
              class="btn btn-danger"
              @click.prevent="deletevehicle(vehicle.id)"
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
      vehicles: []
    };
  },

  created() {
    let uri = "http://localhost:8081/api/vehicles";
    this.axios.get(uri).then(response => {
      this.vehicles = response.data.data;
    });
  }

  // methods: {
  //   deletevehicle(id)
  //   {
  //         let uri = `http://localhost:8081/company/delete/${id}`;
  //         this.axios.delete(uri).then(response => {
  //         this.companies.splice(this.companies.indexOf(id), 1);
  //     });
  //   }
  // }
};
</script>
