module {
  // Product types
  public type Product = {
    id : Nat;
    name : Text;
    description : Text;
    imageUrl : Text;
    isActive : Bool;
    createdAt : Int;
  };

  // Order item submitted by a customer
  public type OrderItem = {
    productId : Nat;
    productName : Text;
    quantity : Nat;
  };

  // Order status
  public type OrderStatus = {
    #pending;
    #read;
    #completed;
  };

  // Full order record stored in the backend
  public type Order = {
    id : Nat;
    customerName : Text;
    customerPhone : Text;
    items : [OrderItem];
    notes : Text;
    createdAt : Int;
    status : OrderStatus;
  };

  // Input type for placing an order (no id, no status, no timestamp)
  public type OrderInput = {
    customerName : Text;
    customerPhone : Text;
    items : [OrderItem];
    notes : Text;
  };

  // Admin login result
  public type LoginResult = {
    #ok : Text;   // session token
    #err : Text;  // error message
  };

  // Product rating entry submitted by a customer
  public type RatingEntry = {
    productId : Nat;
    rating : Nat;     // 1–5 stars
    comment : Text;   // optional feedback (empty string if none)
    createdAt : Int;
  };
};
