import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Product({gpuObj}) {
    // const hour = new Date().getHours();
    // const openHour = 12;
    // const closeHour = 22;
    // const isOpen = hour >= openHour && hour <= closeHour;

    // console.log(isOpen);
    // if(isOpen){

    // }
    // if ((gpuObj.isSoldout = false)) {
    //     return null;
    // }
  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          {gpuObj.quantity === 0 ? (
            <label className="stock bg-danger"> Out of Stock </label>
          ) : (
            <label className="stock bg-success"> In Stock </label>
          )}
        <img src={gpuObj.picture} alt={gpuObj.name}  className={`${gpuObj.quantity === 0 ? "sold-out" : ""}`}/>
        </div>
        <div className="product-card-body">
          <p className="product-brand">GeForce</p>
          <h5 className="product-name">
            <a href="">{gpuObj.name}</a>
          </h5>
          <div>
            <span className="selling-price">{gpuObj.price}</span>
            <span className="">qty: {gpuObj.quantity}</span>
          </div>
          <div className="mt-2">
            <a href="" className="btn btn1">
              Add To Cart
            </a>
            <a href="" className="btn btn1">
              <FontAwesomeIcon icon = {faHeart} />
            </a>
            <a href="" className="btn btn1">
              
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

