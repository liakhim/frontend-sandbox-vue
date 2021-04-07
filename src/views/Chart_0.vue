<template>
  <div class="small">
    <line-chart v-if="flag" :chart-data="chartdata" :options="options"></line-chart>
  </div>
</template>

<script>
  import LineChart from '../components/Chart_0.js'
  import moment from "vue-moment"
  export default {
    components: {
      LineChart
    },
    data () {
      return {
        flag: true,
        test_data: [10, 24, 10, 10, 20, 0, 12, 14, 18, 22, 24, 26],
        chartdata: {
          labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
          datasets: [
            {
              label: 'Commits',
              backgroundColor: '#f87979',
              data: [10, 24, 10, 0, 20, 10, 12, 14, 18, 22, 24, 26]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {

    },
    methods: {
      moment () {
        return moment();
      },
      fillData () {
        this.flag = false
        this.chartdata.datasets.data = [0,1,2,3,1,0]
        this.flag = true
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style lang="scss">
  .small {
    max-width: 600px;
    margin:  0 auto 150px auto;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #f07878;
      margin: 0 0 20px 0;
      color: #000
    }
  }
</style>
