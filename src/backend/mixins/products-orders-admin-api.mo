import Types "../types/products-orders-admin";
import CommonTypes "../types/common";
import Lib "../lib/products-orders-admin";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (
  products : List.List<Types.Product>,
  orders : List.List<Types.Order>,
  counters : CommonTypes.Counters,
  ratings : List.List<Types.RatingEntry>,
) {
  // ── Public product queries ────────────────────────────────────────

  /// Returns all active products (public)
  public query func getActiveProducts() : async [Types.Product] {
    Lib.getActiveProducts(products)
  };

  /// Returns all products including inactive ones (admin only)
  public query func getAllProducts(token : Text) : async [Types.Product] {
    Lib.requireAdmin(token);
    Lib.getAllProducts(products)
  };

  // ── Admin product management ──────────────────────────────────────

  /// Admin adds a new product
  public shared func addProduct(token : Text, name : Text, imageUrl : Text, description : Text) : async Types.Product {
    Lib.requireAdmin(token);
    let product = Lib.addProduct(products, counters.nextProductId, name, imageUrl, description, Time.now());
    counters.nextProductId += 1;
    product
  };

  /// Admin toggles a product active/inactive
  public shared func toggleProduct(token : Text, productId : CommonTypes.ProductId) : async ?Types.Product {
    Lib.requireAdmin(token);
    Lib.toggleProduct(products, productId)
  };

  /// Admin updates a product's image URL
  public shared func updateProductImage(token : Text, productId : CommonTypes.ProductId, imageUrl : Text) : async ?Types.Product {
    Lib.requireAdmin(token);
    Lib.updateProductImage(products, productId, imageUrl)
  };

  /// Admin clears image URLs for products with incorrectly assigned photos (one-time fix)
  public shared func fixProductImages(token : Text, productIds : [CommonTypes.ProductId]) : async () {
    Lib.requireAdmin(token);
    Lib.clearProductImages(products, productIds)
  };

  // ── Customer orders ───────────────────────────────────────────────

  /// Customer places an order
  public shared func placeOrder(input : Types.OrderInput) : async Types.Order {
    let order = Lib.placeOrder(orders, counters.nextOrderId, input, Time.now());
    counters.nextOrderId += 1;
    order
  };

  // ── Admin order management ────────────────────────────────────────

  /// Admin views all orders
  public query func getAllOrders(token : Text) : async [Types.Order] {
    Lib.requireAdmin(token);
    Lib.getAllOrders(orders)
  };

  /// Admin marks order as read
  public shared func markOrderRead(token : Text, orderId : CommonTypes.OrderId) : async ?Types.Order {
    Lib.requireAdmin(token);
    Lib.markOrderRead(orders, orderId)
  };

  /// Admin marks order as completed
  public shared func markOrderCompleted(token : Text, orderId : CommonTypes.OrderId) : async ?Types.Order {
    Lib.requireAdmin(token);
    Lib.markOrderCompleted(orders, orderId)
  };

  // ── Admin authentication ──────────────────────────────────────────

  /// Verifies admin credentials; returns session token on success
  public shared func adminLogin(username : Text, password : Text) : async Types.LoginResult {
    Lib.verifyAdmin(username, password)
  };

  // ── Product ratings ───────────────────────────────────────────────

  /// Customer submits a rating (1-5 stars) for a product
  public shared func rateProduct(productId : Nat, rating : Nat, comment : Text) : async () {
    Lib.rateProduct(ratings, productId, rating, comment, Time.now())
  };

  /// Returns all ratings for a specific product
  public query func getProductRatings(productId : Nat) : async [Types.RatingEntry] {
    Lib.getProductRatings(ratings, productId)
  };

  /// Returns the average star rating for a product, or null if no ratings
  public query func getProductAverageRating(productId : Nat) : async ?Float {
    Lib.getProductAverageRating(ratings, productId)
  };
};
