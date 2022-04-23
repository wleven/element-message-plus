<template>
  <div>
    <el-card>
      <template #header>
        <div>自动关闭</div>
      </template>

      <el-button type="primary" @click="handleClick('success', '成功')"
        >成功</el-button
      >
      <el-button type="danger" @click="handleClick('error', '错误')"
        >错误</el-button
      >
      <el-button type="warning" @click="handleClick('warning', '警告')"
        >警告</el-button
      >
      <el-button type="info" @click="handleClick('info', '提示')"
        >提示</el-button
      >

      <el-button @click="handleVNode()">VNode</el-button>

      <el-button type="primary" @click="handleCloseAll">关闭全部</el-button>
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>
        <div>手动关闭</div>
      </template>

      <el-button type="primary" @click="handleClick('success', '成功', 0)"
        >成功</el-button
      >
      <el-button type="danger" @click="handleClick('error', '错误', 0)"
        >错误</el-button
      >
      <el-button type="warning" @click="handleClick('warning', '警告', 0)"
        >警告</el-button
      >
      <el-button type="info" @click="handleClick('info', '提示', 0)"
        >提示</el-button
      >

      <el-button @click="handleVNode(0)">VNode</el-button>

      <el-button type="primary" @click="handleCloseAll">关闭全部</el-button>
    </el-card>
  </div>
</template>

<script>
import { MessagePlus } from "element-message-plus";
export default {
  name: "TheMessage",

  methods: {
    handleClick(type, msg, duration = 1.5 * 1000) {
      this.$Message({
        message: msg,
        type: type,
        duration,
      });
    },

    handleVNode(duration = 1.5 * 1000) {
      MessagePlus({
        type: "success",
        duration,
        dangerouslyUseHTMLString: true,
        message: "<strong>这是 <i>HTML</i> 片段</strong>",
      });
    },

    handleCloseAll() {
      this.$Message.closeAll();
    },
  },
};
</script>
