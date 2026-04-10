import Types "../types/products-orders-admin";
import CommonTypes "../types/common";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  // ── Admin credentials ─────────────────────────────────────────────
  let ADMIN_USERNAME = "Murphy";
  let ADMIN_PASSWORD = "22/10/2008";
  let ADMIN_TOKEN = "jain-grocery-admin-token-murphy";

  // ── Default products seed data ────────────────────────────────────
  let DEFAULT_PRODUCTS : [(Text, Text, Text)] = [
    (
      "Moong Dal",
      "/assets/products/moong-dal.jpg",
      "ताज़ी और शुद्ध मूंग दाल — हल्की, सुपाच्य और पोषण से भरपूर। घर की रसोई में बनी दाल का असली देसी स्वाद लाती है। बड़ों से लेकर बच्चों तक — सबकी पहली पसंद।",
    ),
    (
      "Moong Mogar",
      "/assets/products/moong-mogar.jpg",
      "बेहद मुलायम और खिली-खिली मूंग मोगर, जो मिनटों में पक जाती है। इसका सुनहरा रंग और हल्की खुशबू थाली की शान बढ़ा देती है। सेहत और स्वाद का अद्भुत संगम।",
    ),
    (
      "Urad Dal",
      "/assets/products/urad-dal.jpg",
      "मलाईदार और गाढ़ी उड़द दाल — दाल मखनी और इडली का असली आधार। प्रोटीन और पोषण का भंडार, जो हर खाने को खास बनाती है। रोज़ाना की थाली का अटूट हिस्सा।",
    ),
    (
      "Makke Ka Aata",
      "/assets/products/urad-mogar.jpg",
      "सफेद और साफ उड़द मोगर — जिससे बनती है एकदम मखमली दाल। पाचन में हल्की और स्वाद में लाजवाब, यह हर उम्र के लिए उपयुक्त है। घर के खाने की असली रौनक।",
    ),
    (
      "Chana Dal",
      "/assets/products/chana-dal.webp",
      "मोटी और दानेदार चना दाल — पकने पर खिलती है और मुँह में घुल जाती है। इससे बनी दाल, हलवा और चीला सभी बेमिसाल होते हैं। पोषण और स्वाद का बेजोड़ मेल।",
    ),
    (
      "Besan",
      "/assets/products/besan.jpg",
      "बारीक पिसा हुआ शुद्ध बेसन — पकौड़े, कढ़ी और मिठाइयों की जान। त्योहार हो या रोज़मर्रा — इसके बिना रसोई अधूरी है। ताज़ा, खुशबूदार और एकदम असली।",
    ),
    (
      "Urad Mogar",
      "/assets/products/makke-ka-aata.jpg",
      "ताज़ा पिसा मक्के का आटा — जिससे बनती है गरमागरम मक्के की रोटी। सरसों के साग के साथ यह जोड़ी दिल और पेट दोनों को खुश करती है। राजस्थान का असली देसी स्वाद।",
    ),
    (
      "Bajre Ka Aata",
      "/assets/products/bajre-ka-aata.jpg",
      "देसी बाजरे का आटा — सर्दियों की ऊर्जा का असली स्रोत। इससे बनी गरमागरम रोटियाँ शरीर को अंदर से मजबूत बनाती हैं। राजस्थान का पारंपरिक स्वाद और पोषण का अनमोल खज़ाना।",
    ),
    (
      "Lal Mirch Powder",
      "/assets/products/lal-mirch-powder.jpg",
      "सुर्ख लाल, खुशबूदार लाल मिर्च पाउडर — हर सब्ज़ी का रंग और स्वाद निखारे। ताज़ी मिर्चों से बना यह पाउडर खाने में जादुई रंगत लाता है। रसोई की रोज़ की ज़रूरत।",
    ),
    (
      "Tikhu Lal Mirch Powder",
      "/assets/products/tikhu-lal-mirch-powder.jpg",
      "असली तीखेपन के लिए — यह तीखा लाल मिर्च पाउडर चटखारे प्रेमियों की पहली पसंद है। इसकी तेज़ खुशबू और तीव्र स्वाद खाने को यादगार बना देती है। सच्चे मसाले-प्रेमियों के लिए।",
    ),
    (
      "Dhaniya Powder",
      "/assets/products/haldi-powder.jpg",
      "शुद्ध सोनेरी हल्दी — रसोई और सेहत दोनों का अमूल्य साथी। इसकी मिट्टी जैसी सुगंध और आयुर्वेदिक गुण हर खाने को पूरा करते हैं। प्रकृति का सबसे बेशकीमती उपहार।",
    ),
    (
      "Gud",
      "/assets/products/dhaniya-powder.jpg",
      "ताज़ा पिसा धनिया पाउडर — हर सब्ज़ी और करी की असली जान। इसकी मनमोहक सुगंध रसोई को महका देती है और खाने का स्वाद दोगुना कर देती है। बेजोड़ खुशबू, बेमिसाल स्वाद।",
    ),
    (
      "Lal Mirch",
      "/assets/products/gud.jpg",
      "देसी गुड़ — प्रकृति की सबसे शुद्ध और मीठी सौगात। खाने के बाद एक टुकड़ा गुड़ पाचन के लिए बेहद गुणकारी है। सर्दियों में गुड़ की चाय और लड्डू — दिल को गर्माहट देते हैं।",
    ),
    (
      "Sendha Namak",
      "/assets/products/sendha-namak.jpg",
      "शुद्ध सेंधा नमक — प्रकृति की अनमोल देन। व्रत में भी उपयोगी, स्वाद में भी लाजवाब। हर घर की रसोई की जरूरत।",
    ),
  ];

  // ── Product domain ──────────────────────────────────────────────

  /// Returns all active products
  public func getActiveProducts(products : List.List<Types.Product>) : [Types.Product] {
    products.filter(func(p) { p.isActive }).toArray()
  };

  /// Returns all products (active + inactive) for admin use
  public func getAllProducts(products : List.List<Types.Product>) : [Types.Product] {
    products.toArray()
  };

  /// Adds a new product; returns the new product's id
  public func addProduct(
    products : List.List<Types.Product>,
    nextId : Nat,
    name : Text,
    imageUrl : Text,
    description : Text,
    createdAt : Int,
  ) : Types.Product {
    let product : Types.Product = {
      id = nextId;
      name = name;
      imageUrl = imageUrl;
      description = description;
      isActive = true;
      createdAt = createdAt;
    };
    products.add(product);
    product
  };

  /// Updates a product's imageUrl; returns updated product or null if not found
  public func updateProductImage(
    products : List.List<Types.Product>,
    productId : CommonTypes.ProductId,
    imageUrl : Text,
  ) : ?Types.Product {
    var updated : ?Types.Product = null;
    products.mapInPlace(
      func(p) {
        if (p.id == productId) {
          let upd = { p with imageUrl = imageUrl };
          updated := ?upd;
          upd
        } else {
          p
        }
      }
    );
    updated
  };

  /// Clears imageUrl for products whose IDs are in the given list (sets to "")
  /// Used to fix incorrectly assigned product photos in live data
  public func clearProductImages(
    products : List.List<Types.Product>,
    productIds : [CommonTypes.ProductId],
  ) : () {
    products.mapInPlace(
      func(p) {
        var shouldClear = false;
        for (id in productIds.values()) {
          if (p.id == id) { shouldClear := true };
        };
        if (shouldClear) { { p with imageUrl = "" } } else { p }
      }
    );
  };

  /// Toggles a product's isActive flag; returns updated product or null if not found
  public func toggleProduct(
    products : List.List<Types.Product>,
    productId : CommonTypes.ProductId,
  ) : ?Types.Product {
    var updated : ?Types.Product = null;
    products.mapInPlace(
      func(p) {
        if (p.id == productId) {
          let toggled = { p with isActive = not p.isActive };
          updated := ?toggled;
          toggled
        } else {
          p
        }
      }
    );
    updated
  };

  /// Seeds the 14 default products if the list is empty
  public func seedDefaultProducts(
    products : List.List<Types.Product>,
    createdAt : Int,
  ) : () {
    if (not products.isEmpty()) return;
    var id : Nat = 0;
    for ((name, imageUrl, description) in DEFAULT_PRODUCTS.values()) {
      products.add({
        id = id;
        name = name;
        imageUrl = imageUrl;
        description = description;
        isActive = true;
        createdAt = createdAt;
      });
      id += 1;
    };
  };

  /// Restores imageUrls for all products from DEFAULT_PRODUCTS (matched by id index).
  /// Also ensures Sendha Namak (id 13) exists in the live list if missing.
  /// Call this on every deploy to fix any products with empty imageUrls.
  public func restoreAllProductImages(
    products : List.List<Types.Product>,
    createdAt : Int,
  ) : () {
    // Restore imageUrls for existing products by matching id to DEFAULT_PRODUCTS index
    products.mapInPlace(
      func(p) {
        if (p.id < DEFAULT_PRODUCTS.size()) {
          let (_, imageUrl, _) = DEFAULT_PRODUCTS[p.id];
          { p with imageUrl = imageUrl }
        } else { p }
      }
    );
    // Ensure Sendha Namak (id 13) exists if not already present
    let lastId = DEFAULT_PRODUCTS.size() - 1 : Nat;
    let alreadyHasSendha = products.find(func(p) { p.id == lastId }) != null;
    if (not alreadyHasSendha) {
      let (name, imageUrl, description) = DEFAULT_PRODUCTS[lastId];
      products.add({
        id = lastId;
        name = name;
        imageUrl = imageUrl;
        description = description;
        isActive = true;
        createdAt = createdAt;
      });
    };
  };

  // ── Order domain ─────────────────────────────────────────────────

  /// Places a new order; returns the created order
  public func placeOrder(
    orders : List.List<Types.Order>,
    nextId : Nat,
    input : Types.OrderInput,
    createdAt : Int,
  ) : Types.Order {
    let order : Types.Order = {
      id = nextId;
      customerName = input.customerName;
      customerPhone = input.customerPhone;
      items = input.items;
      notes = input.notes;
      createdAt = createdAt;
      status = #pending;
    };
    orders.add(order);
    order
  };

  /// Returns all orders (for admin)
  public func getAllOrders(orders : List.List<Types.Order>) : [Types.Order] {
    orders.toArray()
  };

  /// Marks an order as read; returns updated order or null if not found
  public func markOrderRead(
    orders : List.List<Types.Order>,
    orderId : CommonTypes.OrderId,
  ) : ?Types.Order {
    var updated : ?Types.Order = null;
    orders.mapInPlace(
      func(o) {
        if (o.id == orderId) {
          let upd = { o with status = #read };
          updated := ?upd;
          upd
        } else {
          o
        }
      }
    );
    updated
  };

  /// Marks an order as completed; returns updated order or null if not found
  public func markOrderCompleted(
    orders : List.List<Types.Order>,
    orderId : CommonTypes.OrderId,
  ) : ?Types.Order {
    var updated : ?Types.Order = null;
    orders.mapInPlace(
      func(o) {
        if (o.id == orderId) {
          let upd = { o with status = #completed };
          updated := ?upd;
          upd
        } else {
          o
        }
      }
    );
    updated
  };

  // ── Admin auth domain ─────────────────────────────────────────────

  /// Verifies admin credentials; returns #ok(token) or #err(message)
  public func verifyAdmin(username : Text, password : Text) : Types.LoginResult {
    if (username == ADMIN_USERNAME and password == ADMIN_PASSWORD) {
      #ok(ADMIN_TOKEN)
    } else {
      #err("Invalid username or password")
    }
  };

  /// Validates a session token; traps if invalid
  public func requireAdmin(token : Text) : () {
    if (token != ADMIN_TOKEN) {
      Runtime.trap("Unauthorized: invalid admin token")
    }
  };

  // ── Rating domain ─────────────────────────────────────────────────

  /// Stores a new rating; validates rating is 1-5
  public func rateProduct(
    ratings : List.List<Types.RatingEntry>,
    productId : Nat,
    rating : Nat,
    comment : Text,
    createdAt : Int,
  ) : () {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5")
    };
    ratings.add({
      productId = productId;
      rating = rating;
      comment = comment;
      createdAt = createdAt;
    });
  };

  /// Returns all ratings for a specific product
  public func getProductRatings(
    ratings : List.List<Types.RatingEntry>,
    productId : Nat,
  ) : [Types.RatingEntry] {
    ratings.filter(func(r) { r.productId == productId }).toArray()
  };

  /// Returns average rating for a product, null if no ratings exist
  public func getProductAverageRating(
    ratings : List.List<Types.RatingEntry>,
    productId : Nat,
  ) : ?Float {
    let productRatings = ratings.filter(func(r) { r.productId == productId });
    let count = productRatings.size();
    if (count == 0) return null;
    let total = productRatings.foldLeft(0, func(acc, r) { acc + r.rating });
    ?(total.toFloat() / count.toFloat())
  };
};
