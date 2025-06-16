import Footer from "./Footer";
import Navbar from "./Navbar";
import style from "../src/store.module.css"

export default function Store() {
    const products = [
        {
          title: "IQ Test Complete Intelligence Profile",
          price: "$19.95",
          description:
            "The Complete Intelligence Profile is a detailed analysis of the IQ score you received on the IQ Test.",
        },
        {
          title: "IQTuneUps",
          price: "$19.95",
          description:
            "This Consciousness Exploration Program allows you to explore every facet of your inner being and many variations of intelligence through a set of 134 interesting, fun exercises.",
        },
      ];

      const productList = [...products, ...products];

      const handleAddToCart = (product) => {
        // Get existing cart from localStorage
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    
        // Add new product to cart
        const updatedCart = [...existingCart, product];
    
        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    
        alert(`${product.title} added to cart!`);
      };
    
    return(
        <>
            <Navbar />
            <main>
                <div className={style.store}>
                    <h1>IQ Test Shop</h1>
                    <p>Showing all 2 results</p>
                    <div className={style["holder-add-to-cart"]}>
                    {productList.map((product, index) => (
                    <div className={style["add-to-cart"]} key={index}>
                        <h2>{product.title}</h2>
                        <span className={style["price"]}>{product.price}</span>
                        <p>{product.description}</p>
                        <button className={style["store-btn"]} onClick={() => handleAddToCart(product)}>
                            Add to cart
                        </button>
                    </div>
                    ))}

                        {/* <div className="add-to-cart">
                            <h2>IQTuneUps</h2>
                            <span className="price">$19.95</span>
                            <p>This Consciousness Exploration Program allows you to explore every facet of your inner being and many variations of intelligence through a set of 134 interesting, fun exercises.</p>
                            <button className="btn">Add to cart</button>
                        </div>
                        <div className="add-to-cart">
                            <h2>IQTuneUps</h2>
                            <span className="price">$19.95</span>
                            <p>This Consciousness Exploration Program allows you to explore every facet of your inner being and many variations of intelligence through a set of 134 interesting, fun exercises.</p>
                            <button className="btn">Add to cart</button>
                        </div>
                        <div className="add-to-cart">
                            <h2>IQ Test Complete Intelligence Profile</h2>
                            <span className="price">$19.95</span>
                            <p>The Complete Intelligence Profile is a detailed analysis of the IQ score you received on the IQ Test.</p>
                            <button className="btn">Add to cart</button>
                        </div> */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
