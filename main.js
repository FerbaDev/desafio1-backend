class ProductManager {
  static id = 0;
  constructor(products) {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let productExists = this.products.some(
      (producto) => producto.code === code
    );
    if (productExists) {
      console.log("El producto ya existe, verifique");
      return;
    }
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Verifique que todos los campos se hayan completado");
      return;
    }
    this.products.push({
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ProductManager.id,
    });
    ProductManager.id++;
  }
  getProducts() {
    console.log(this.products);
    return;
  }

  getProductById(id) {
    let prodcuto = this.products.find((producto) => producto.id === id);
    prodcuto
      ? console.log(`El producto ${id} existe, es: ${prodcuto.title}`)
      : console.log("Not found");
  }
}

let productos = new ProductManager();
productos.getProducts();
productos.addProduct(
  "Encendedor",
  "Marca BIC",
  1000,
  "https://cdn.pixabay.com/photo/2021/04/20/02/01/lighter-6192769_1280.png",
  1,
  10
);
productos.addProduct(
  "Cigarrillos",
  "Marca Lucky Strike",
  2000,
  "https://cdn.pixabay.com/photo/2021/04/20/02/01/lighter-6192769_1280.png",
  2,
  10
);
productos.addProduct(
  "Cigarrillos",
  "Marca Lucky Strike",
  2000,
  "https://cdn.pixabay.com/photo/2021/04/20/02/01/lighter-6192769_1280.png",
  2,
  10
);
productos.addProduct(
  "Gaseosa",
  "Marca Pritty",
  "https://cdn.pixabay.com/photo/2021/04/20/02/01/lighter-6192769_1280.png",
  4,
  10
);
productos.getProducts();
productos.getProductById(1);
productos.getProductById(8);
