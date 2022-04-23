import { Message } from "element-ui";
import {
  ElMessageComponent,
  ElMessageOptions,
  MessageType,
} from "element-ui/types/message";
import { IMessagePlus } from "../types";

/** 消息列表 - 忽略重复的消息提示*/
export class MessagePlus {
  /** 组件实例Map */
  private static _instanceMap = new Map<string, ElMessageComponent>([]);

  constructor(config?: ElMessageOptions) {
    if (!config) return;

    MessagePlus.middleware(config);
  }

  static error(config: ElMessageOptions) {
    return MessagePlus.middleware(config, "error");
  }

  static success(config: ElMessageOptions) {
    return MessagePlus.middleware(config, "success");
  }

  static warning(config: ElMessageOptions) {
    return MessagePlus.middleware(config, "warning");
  }

  static info(config: ElMessageOptions) {
    return MessagePlus.middleware(config, "info");
  }

  static closeAll() {
    (Message as IMessagePlus).closeAll();
    MessagePlus._instanceMap = new Map([]);
  }

  private static middleware(
    config: ElMessageOptions,
    type: MessageType = "error"
  ) {
    if (!config) {
      throw new Error("参数不能为空");
    }

    if (typeof config === "string") {
      return MessagePlus.message({ type, message: config });
    }

    if (typeof config === "object") {
      return MessagePlus.message({ ...config, type: config.type ?? type });
    }
  }

  private static message(config: ElMessageOptions) {
    const { type, message } = config ?? {};

    if (!type || !message) {
      throw new Error("type或message不能为空");
    }

    if (MessagePlus._instanceMap.has(<string>message)) return;

    const instance = Message({
      ...config,
      onClose: (com) => {
        MessagePlus._instanceMap.delete(<string>message);
        config.onClose && config.onClose(com);
      },
    });

    MessagePlus.update_instanceMap(<string>message, instance);

    return instance;
  }

  private static update_instanceMap(
    message: string,
    instance: ElMessageComponent
  ) {
    MessagePlus._instanceMap.set(message, instance);
  }
}

function install(vue: Function, options: { target: string }) {
  if (options?.target) {
    vue.prototype[options.target] = MessagePlus;
  } else {
    vue.prototype.$message = MessagePlus;
  }
}

export default install;
