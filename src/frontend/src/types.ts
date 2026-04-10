// Re-export types from the generated backend module for use across the app
export type {
  Product,
  Order,
  OrderItem,
  OrderInput,
  OrderId,
  ProductId,
  LoginResult,
} from "./backend";
export { OrderStatus } from "./backend";
