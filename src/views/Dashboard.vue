<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->

    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">



    </b-container>
<b-container fluid class="mt--7">
      <b-row>
        <b-col>
          <light-table/>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
      <dark-table></dark-table>
    </b-container>
  </div>
</template>
<script>
  import projects from './Tables/projects'
  import users from './Tables/users'
  import LightTable from "./Tables/RegularTables/LightTable";
  import DarkTable from "./Tables/RegularTables/DarkTable";

  // Components
  // import BaseProgress from '@/components/BaseProgress';
  // import StatsCard from '@/components/Cards/StatsCard';


  export default {
    components: {
      LightTable,
      DarkTable,
      // BaseProgress,
      // StatsCard,
    },
    data() {
      return {
        projects,
        users
      };
    },
    methods: {
    },
    mounted() {
    }
  };
</script>
<style>
.el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}
</style>
