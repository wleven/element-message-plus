import {
  ElMessage,
  ElMessageComponent,
  ElMessageOptions,
} from "element-ui/types/message";

export interface IMessagePlus extends ElMessage {
  closeAll(): void;
}

export declare class MessagePlus {
  constructor(config?: ElMessageOptions);
  static error(config: ElMessageOptions): ElMessageComponent;
  static success(config: ElMessageOptions): ElMessageComponent;
  static warning(config: ElMessageOptions): ElMessageComponent;
  static info(config: ElMessageOptions): ElMessageComponent;
  static closeAll(): void;
}
