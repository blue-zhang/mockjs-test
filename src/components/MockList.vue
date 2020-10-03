<template>
  <div>
    页码：
    <input
      type="text"
      v-model="page"
    />
    数量：
    <input
      type="text"
      v-model="num"
    />
    <button @click="submitFn">提交</button>
        <pre v-html="JSON.stringify(pageLists[curPage-1], null, 4)"></pre>
<!--    <pre>{{ JSON.stringify(pageLists[curPage - 1], null, 2) }}</pre>-->
    <button @click="reducePage">上一页</button>
    <span>{{ curPage }}</span> / <span>{{ page }}</span>
    <button @click="addPage">下一页</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'MockList',
  data () {
    return {
      page: 1,
      num: 1,
      pageLists: [],
      curPage: 1
    }
  },
  methods: {
    submitFn () {
      if (this.page > this.num) {
        alert('分页数不能大于数据条数')
        return
      }
      axios.get('http://localhost:36742/api/getUser', {
        params: {
          page: this.page,
          num: this.num
        }
      }).then(
        res => {
          // **只有一个数据时，返回对象; 有多个数据时，返回数组，每一项是对象**
          let lists = res.data.list.length ? res.data.list : [res.data.list]
          let counts = Math.floor(this.num / this.page) >= 1 ? Math.floor(this.num / this.page) : 1
          // 定义二维数组，不然push会报错
          let pageLists = []
          for (let k = 0; k <= this.page - 1; k++) {
            pageLists[k] = []
          }
          // 分页逻辑
          for (let page = 1; page < this.page; page++) {
            for (let i = counts * (page - 1); i < counts * page-1; i++) {
              pageLists[page - 1].push(lists[i])
            }
          }
          // this.num / this.page不是整数时，单独对最后一页的数据进行提取
          for (let num = counts * (this.page - 1); num < this.num; num++) {
            pageLists[this.page - 1].push(lists[num])
          }
          // 写在同一个循环中，但是判断用===一直为false，原因未知.因此用==
          // for (let page = 1; page <= this.page; page++) {
          //   if (page == this.page) {
          //     for (let i = counts * (page - 1); i < this.num; i++) {
          //       pageLists[page - 1].push(lists[i])
          //     }
          //   } else {
          //     for (let i = counts * (page - 1); i < counts * page; i++) {
          //       pageLists[page - 1].push(lists[i])
          //     }
          //   }
          // }
          this.curPage = 1
          this.pageLists = pageLists
        }
      )
    },
    addPage () {
      this.curPage = (this.curPage < this.page) ? this.curPage + 1 : this.page
    },
    reducePage () {
      this.curPage = (this.curPage > 1) ? this.curPage - 1 : 1
    }
  }
}
</script>
<style scoped>
</style>
