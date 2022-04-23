# element-message-plus

ElementUI `Message` 组件增强

同一时间，相同`type`和`message`的组件实例只允许创建一次,

解决多个相同的 message 会重复创建显示

## 安装依赖

```
pnpm install element-message-plus
```

## 全局引入
```js
import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import MessagePlus from "element-message-plus";

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(MessagePlus);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

## 配置

默认配置,替换默认的$message

```js
Vue.use(MessagePlus);
```

自定义挂载，可自定义全局挂载的位置

```js
Vue.use(MessagePlus, { target: "$Message" });
```

## 在 JS 中使用

参数类型`ElMessageOptions`,与官方文档一致

```js
...
import { MessagePlus } from "element-message-plus";
...

MessagePlus();
MessagePlus.info();
MessagePlus.success();
MessagePlus.warning();
MessagePlus.error();
MessagePlus.closeAll()
```

## 在 Vue 组件中使用

参数类型`ElMessageOptions`,与官方文档一致

```js
this.$message();
this.$message.info();
this.$message.success();
this.$message.warning();
this.$message.error();
this.$message.closeAll();
```
