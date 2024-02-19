import Product from "./Product";
import videoCards from "./ProductData";

function ProductList() {
    const gpu = videoCards;

  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4">Our Products</h4>
          </div>
        {gpu.map((m) => <Product gpuObj = {m}/>)}
        </div>
      </div>
    </div>
  );
}

export default ProductList;