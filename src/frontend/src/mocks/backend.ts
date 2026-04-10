import type { backendInterface, Product, Order, OrderInput, LoginResult } from "../backend";
import { OrderStatus } from "../backend";

const sampleProducts: Product[] = [
  {
    id: BigInt(0),
    name: "Moong Dal",
    description: "शुद्ध और ताज़ी मूंग दाल, जो हल्की और पौष्टिक होती है। इसे घर पर बनाने से दाल का असली स्वाद आता है। रोज़ाना के खाने को खास बना दे यह दाल।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/moong-dal.jpg",
  },
  {
    id: BigInt(1),
    name: "Moong Mogar",
    description: "छिलका उतरी हुई मूंग मोगर, खाने में बेहद हल्की और सुपाच्य। इसकी खुशबू और रंग खाने को और भी लज़ीज़ बनाते हैं। बड़े और बच्चे सभी को पसंद आती है।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/moong-mogar.jpg",
  },
  {
    id: BigInt(2),
    name: "Urad Dal",
    description: "उड़द दाल — दाल मखनी और इडली का आधार। यह प्रोटीन से भरपूर और बहुत स्वादिष्ट होती है। घर के खाने में चार चाँद लगा देती है यह दाल।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/urad-dal.jpg",
  },
  {
    id: BigInt(3),
    name: "Urad Mogar",
    description: "छिलका रहित उड़द मोगर, सफेद और साफ। इससे बनी दाल एकदम मलाईदार और मुँह में घुल जाने वाली होती है। सेहत के लिए भी बहुत फायदेमंद।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/urad-mogar.jpg",
  },
  {
    id: BigInt(4),
    name: "Chana Dal",
    description: "मोटी और दानेदार चना दाल, जो हर घर की पहली पसंद है। इससे बनी दाल और हलवा दोनों ही लाजवाब होते हैं। पोषण और स्वाद का बेहतरीन मेल।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/chana-dal.jpg",
  },
  {
    id: BigInt(5),
    name: "Besan",
    description: "बारीक पिसा हुआ शुद्ध बेसन, पकौड़ों और मिठाइयों की जान। इससे बने पकवान त्योहारों और रोज़ के खाने में समान रूप से पसंद किए जाते हैं। ताज़ा और खुशबूदार।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/besan.jpg",
  },
  {
    id: BigInt(6),
    name: "Makke Ka Aata",
    description: "सर्दियों की शान — मक्के का आटा, जिससे बनती है गरमागरम मक्के की रोटी। सरसों के साग के साथ यह जोड़ी अटूट है। ताज़ा पिसा हुआ, असली राजस्थानी स्वाद।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/makke-ka-aata.jpg",
  },
  {
    id: BigInt(7),
    name: "Bajre Ka Aata",
    description: "बाजरे का आटा, ताक़त और स्वाद का मेल। इससे बनी रोटियाँ गर्म तासीर की होती हैं और सर्दियों में विशेष रूप से फायदेमंद हैं। आयरन और प्रोटीन से भरपूर, घर के हर सदस्य के लिए पौष्टिक।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/bajre-ka-aata.jpg",
  },
  {
    id: BigInt(8),
    name: "Lal Mirch Powder",
    description: "सुर्ख लाल मिर्च पाउडर, जो खाने में रंग और हल्का तीखापन लाता है। ताज़ी मिर्च से बना यह पाउडर हर सब्ज़ी का स्वाद निखार देता है। घर के मसालों की रोज़ की ज़रूरत।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/lal-mirch-powder.jpg",
  },
  {
    id: BigInt(9),
    name: "Tikhu Lal Mirch Powder",
    description: "तीखा लाल मिर्च पाउडर — जिसे चटखारे लेकर खाने वाले पसंद करते हैं। इसकी तीव्र खुशबू और तेज़ तीखापन खाने को यादगार बना देता है। असली तीखेपन के शौकीनों के लिए।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/tikhu-lal-mirch-powder.jpg",
  },
  {
    id: BigInt(10),
    name: "Haldi Powder",
    description: "शुद्ध हल्दी पाउडर — रसोई और सेहत दोनों का साथी। इसकी सुनहरी रंगत और मिट्टी जैसी खुशबू हर खाने को पूरा करती है। आयुर्वेदिक गुणों से भरपूर।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/haldi-powder.jpg",
  },
  {
    id: BigInt(11),
    name: "Dhaniya Powder",
    description: "ताज़ा पिसा हुआ धनिया पाउडर, जो हर सब्ज़ी और करी की जान है। इसकी मनमोहक खुशबू रसोई को महका देती है। स्वाद और सुगंध दोनों में बेजोड़।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/dhaniya-powder.jpg",
  },
  {
    id: BigInt(12),
    name: "Gud",
    description: "देसी गुड़ — प्राकृतिक मिठास का सबसे शुद्ध रूप। खाने के बाद गुड़ खाना सेहत के लिए बेहद लाभकारी है। सर्दियों में गुड़ की चाय और लड्डू — दोनों ही बेमिसाल।",
    createdAt: BigInt(Date.now()),
    isActive: true,
    imageUrl: "/assets/products/gud.jpg",
  },
];

const sampleOrders: Order[] = [
  {
    id: BigInt(0),
    customerName: "Rahul Sharma",
    customerPhone: "9876543210",
    status: OrderStatus.pending,
    createdAt: BigInt(Date.now()),
    notes: "Please deliver soon",
    items: [
      { productId: BigInt(0), productName: "Moong Dal", quantity: BigInt(2) },
    ],
  },
];

export const mockBackend: backendInterface = {
  addProduct: async (_token: string, name: string, imageUrl: string, description: string): Promise<Product> => ({
    id: BigInt(sampleProducts.length),
    name,
    imageUrl,
    description,
    createdAt: BigInt(Date.now()),
    isActive: true,
  }),

  adminLogin: async (username: string, password: string): Promise<LoginResult> => {
    if (username === "Murphy" && password === "22/10/2008") {
      return { __kind__: "ok", ok: "admin-token-mock-123" };
    }
    return { __kind__: "err", err: "Invalid credentials" };
  },

  getActiveProducts: async (): Promise<Product[]> => sampleProducts.filter(p => p.isActive),

  getAllOrders: async (_token: string): Promise<Order[]> => sampleOrders,

  getAllProducts: async (_token: string): Promise<Product[]> => sampleProducts,

  markOrderCompleted: async (_token: string, orderId: bigint): Promise<Order | null> => {
    const order = sampleOrders.find(o => o.id === orderId);
    if (!order) return null;
    return { ...order, status: OrderStatus.completed };
  },

  markOrderRead: async (_token: string, orderId: bigint): Promise<Order | null> => {
    const order = sampleOrders.find(o => o.id === orderId);
    if (!order) return null;
    return { ...order, status: OrderStatus.read };
  },

  placeOrder: async (input: OrderInput): Promise<Order> => ({
    id: BigInt(sampleOrders.length),
    customerName: input.customerName,
    customerPhone: input.customerPhone,
    notes: input.notes,
    status: OrderStatus.pending,
    createdAt: BigInt(Date.now()),
    items: input.items,
  }),

  toggleProduct: async (_token: string, productId: bigint): Promise<Product | null> => {
    const product = sampleProducts.find(p => p.id === productId);
    if (!product) return null;
    return { ...product, isActive: !product.isActive };
  },

  rateProduct: async (_productId: bigint, _rating: bigint, _comment: string): Promise<void> => {
    // Mock: no-op
  },

  getProductRatings: async (_productId: bigint) => {
    return [];
  },

  getProductAverageRating: async (_productId: bigint): Promise<number | null> => {
    return null;
  },

  updateProductImage: async (_token: string, productId: bigint, imageUrl: string): Promise<Product | null> => {
    const product = sampleProducts.find(p => p.id === productId);
    if (!product) return null;
    return { ...product, imageUrl };
  },

  fixProductImages: async (_token: string, _productIds: bigint[]): Promise<void> => {
    // Mock: no-op
  },
};
