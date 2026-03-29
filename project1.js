const products = [];

// Adds a product to the existing products array after validation.
// Mandatory fields: name (non-empty string) and price (finite number).
function addProduct(product) {
  console.log("addProduct: Received product:", product);

  // Basic shape check
  if (!product || typeof product !== "object") {
    console.error("addProduct: Invalid input. Expected a product object.");
    return false;
  }

  const { name, price } = product;

  // Validate name
  if (typeof name !== "string" || name.trim() === "") {
    console.error(
      "addProduct: Validation failed. 'name' is required and must be a non-empty string.",
    );
    return false;
  }

  // Validate price
  if (typeof price !== "number" || !Number.isFinite(price)) {
    console.error(
      "addProduct: Validation failed. 'price' is required and must be a valid number.",
    );
    return false;
  }

  // All validations passed; add the product
  const normalizedProduct = {
    ...product,
    name: name.trim(),
  };

  products.push(normalizedProduct);
  console.log("addProduct: Product added successfully.");
  console.log("addProduct: Updated products list:", products);
  return true;
}

// Example usage:
// addProduct({ name: "Laptop", price: 799.99 });
// addProduct({ name: "", price: 10 }); // will fail validation
// addProduct({ name: "Mouse", price: "20" }); // will fail validation
