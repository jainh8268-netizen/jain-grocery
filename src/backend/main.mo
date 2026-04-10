import Types "types/products-orders-admin";
import CommonTypes "types/common";
import Lib "lib/products-orders-admin";
import List "mo:core/List";
import Time "mo:core/Time";
import ProductsOrdersAdminApi "mixins/products-orders-admin-api";



actor {
  let products = List.empty<Types.Product>();
  let orders = List.empty<Types.Order>();
  let counters : CommonTypes.Counters = { var nextProductId = 0; var nextOrderId = 0 };
  let ratings = List.empty<Types.RatingEntry>();

  // Seed default products on first run (no-op if products already exist)
  Lib.seedDefaultProducts(products, Time.now());
  counters.nextProductId := products.size();

  include ProductsOrdersAdminApi(products, orders, counters, ratings);
};
