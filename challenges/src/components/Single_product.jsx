import '../CSS/SingleProduct.css'

function SingleProductCard (){
    return(
        <section className="container">
        <div className="left">
            <div className="sidebar">
                <img src="photos/shirt_photo.webp" alt=""/>
                <img src="photos/p1.webp" alt=""/>
                <img src="photos/p2.webp" alt=""/>
            </div>
            <div className="image_part">
                <img src="photos/shirt_photo.webp" alt=""/>
            </div>
        </div>
        <div className="detail">
            <p className="type">POLO RALPH</p>
            <h1>Custom Fit Polo Bear Oxford Shirt</h1>
            <p className="desc">Blue polo with a classic cut. Made of smooth and soft cotton</p>
            <span className="price">₹ 8000.00</span><span>-25%</span>
            <p className="discount">₹13000.00</p>
            <p className="size">CHOOSE SIZE</p>
            <div className="sizes">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
            </div>
            <button>ADD TO BAG</button>
        </div>
    </section>
    )
}

export default SingleProductCard