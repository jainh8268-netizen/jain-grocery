import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RatingEntry {
    createdAt: bigint;
    productId: bigint;
    comment: string;
    rating: bigint;
}
export interface OrderItem {
    productId: bigint;
    productName: string;
    quantity: bigint;
}
export interface OrderInput {
    customerName: string;
    customerPhone: string;
    notes: string;
    items: Array<OrderItem>;
}
export type ProductId = bigint;
export type LoginResult = {
    __kind__: "ok";
    ok: string;
} | {
    __kind__: "err";
    err: string;
};
export interface Order {
    id: bigint;
    customerName: string;
    status: OrderStatus;
    customerPhone: string;
    createdAt: bigint;
    notes: string;
    items: Array<OrderItem>;
}
export type OrderId = bigint;
export interface Product {
    id: bigint;
    name: string;
    createdAt: bigint;
    description: string;
    isActive: boolean;
    imageUrl: string;
}
export enum OrderStatus {
    pending = "pending",
    read = "read",
    completed = "completed"
}
export interface backendInterface {
    addProduct(token: string, name: string, imageUrl: string, description: string): Promise<Product>;
    adminLogin(username: string, password: string): Promise<LoginResult>;
    fixProductImages(token: string, productIds: Array<ProductId>): Promise<void>;
    getActiveProducts(): Promise<Array<Product>>;
    getAllOrders(token: string): Promise<Array<Order>>;
    getAllProducts(token: string): Promise<Array<Product>>;
    getProductAverageRating(productId: bigint): Promise<number | null>;
    getProductRatings(productId: bigint): Promise<Array<RatingEntry>>;
    markOrderCompleted(token: string, orderId: OrderId): Promise<Order | null>;
    markOrderRead(token: string, orderId: OrderId): Promise<Order | null>;
    placeOrder(input: OrderInput): Promise<Order>;
    rateProduct(productId: bigint, rating: bigint, comment: string): Promise<void>;
    toggleProduct(token: string, productId: ProductId): Promise<Product | null>;
    updateProductImage(token: string, productId: ProductId, imageUrl: string): Promise<Product | null>;
}
