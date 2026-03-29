// Best practices
// Backend design for Online Food Delivery

// Task 1: Name : Mans Project: Online Food Delivery Module/F: Backend/Product Management

// Requirement analysis
// 1. Product List
// 2. How
// 3. Whom

// Coding

// Product: Name, Price, Quantity/Weight, Type, Color, Size, Image
// Add ✅ , Edit/Update  ✅, Delete, Get (get one, list)

// DB: mysql

// Add Product
// Get product in the input
// Validation
// Store
const products = [];

function addProduct(product) {
  try {
    console.log("\n Adding product", product); //log
    //product {name, price, quantity, type, color, size, image}
    //Id, Name, Price, Quantity/Weight, Type, Color, Size, Image
    // Required
    // Optional Image
    if (
      product.id &&
      product.name &&
      product.price &&
      product.quantity &&
      product.type &&
      product.color &&
      product.size
    ) {
      // Valid product
      console.log("\n Valid product", product.name); //log
      products.push(product); // save in mysql db
      console.log("\n Add Product Final", products);
      return true;
    } else {
      console.log("\n Input params missing");
      return false;
    }
  } catch (error) {
    console.error("Error in Add Product", error.message);
  }
}

// Edit Product
// Get id and product in the input
// Validation
// Update -> Find product by index , update product using index

function editProduct(id, product) {
  try {
    // Required id,  Name || Price || Quantity/Weight || Type || Color || Size
    if (id && (product.price || product.color)) {
      console.log("\n Valid product to update", id, product);

      const productIndex = products.findIndex((p) => p.id === id);
      console.log("\n productIndex", productIndex);

      if (product.price) {
        products[productIndex].price = product.price;
      }
      if (product.color) {
        products[productIndex].color = product.color;
      }

      console.log("\n Update success", products);
    } else {
      console.log("\n Input params missing");
    }
  } catch (error) {
    console.error("Error in Edit Product", error.message);
  }
}

addProduct({
  id: "1",
  name: "Icecream",
  price: 30,
  quantity: 1,
  type: "Beverage",
  color: "Brown",
  size: "Medium",
});

addProduct({
  id: "2",
  name: "Biscuit",
  price: 10,
  quantity: 1,
  type: "Snacks",
  color: "Brown",
  size: "Large",
});

addProduct({
  id: "3",
  name: "Dairymilk silk",
  price: 100,
  quantity: 1,
  type: "Snacks",
  color: "Brown",
  size: "Large",
});

editProduct("3", { color: "Pink" });
