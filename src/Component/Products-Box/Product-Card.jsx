import "./Product-Card.css"

function ProductCard({img , Character , Role , Description , Abilities , SeriesStartAge = "Not Given" , SeriesEndAge = "Not Given"}) {
    return (
        <div className="PARENTOP">
            <div className="PRODUCTCARD">
                <img src= {img} alt="" />
                <p id="Characters_name">Characters Name : {Character}</p>
                <p id="Role">Role : {Role}</p>
                <p id="Description">Description : {Description}</p>
                <b id="Abilities_Bold">There ABILITIES</b>
                <p id="Abilities">{Abilities}</p>
                <h3>AGES</h3>
                <b id="SeriesStartAge">Series Start Age : {SeriesStartAge}</b>
                <br />
                <b id="SeriesEndAge">Series End Age : {SeriesEndAge}</b>
            </div>
        </div>
    )
}

export default ProductCard