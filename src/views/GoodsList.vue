<template>
  <div>
    <Table :arr="list">
      <template #thead>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="row">
        <td>{{ row.item.id }}</td>
        <td>{{ row.item.goods_name }}</td>
        <td>￥{{ row.item.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="obj"
            v-if="row.item.inputVisible"
            v-focus
            @blur="row.item.inputVisible = false"
            @keydown.enter="enterFn(row.item)"
            v-model="row.item.inputValue"
            @keydown.esc="row.item.inputValue = ''"
          />
          <button
            @click="row.item.inputVisible = true"
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
          >
            +Tag
          </button>

          <span
            v-for="(str, ind) in row.item.tags"
            :key="ind"
            class="badge bg-warning"
            >{{ str }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(row.item.id)">
            删除
          </button>
        </td>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from "../components/Table.vue";
import axios from "axios";
export default {
  data() {
    return {
      list: [],
    };
  },
  components: { Table },
  async created() {
    try {
      const res = await axios({
        url: "/api/goods",
      });
      console.log(res);
      this.list = res.data.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    del(ind) {
      let index = this.list.findIndex((obj) => obj.id == ind);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      if (obj.inputValue.trim().length == 0) {
        alert("请输入！");
      } else {
        obj.tags.push(obj.inputValue);
        obj.inputValue = "";
      }
      // console.log(obj.inputValue);
    },
  },
};
</script>

<style lang="less" scoped>
</style>