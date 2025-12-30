import "./Product-Card.css"

function ProductCard({img}) {
    return (
        <div className="PARENTOP">
            <div className="PRODUCTCARD">
                <img src= {img} alt="" />
            </div>
        </div>
    )
}

export default ProductCard