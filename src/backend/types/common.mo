module {
  public type ProductId = Nat;
  public type OrderId = Nat;
  public type Timestamp = Int;

  /// Mutable counter box — passed by reference into mixins
  public type Counters = {
    var nextProductId : Nat;
    var nextOrderId : Nat;
  };
};
