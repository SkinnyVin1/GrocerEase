import "../Components/Products.css"

const ProdCat = (prop) => {
    return (
        <div className="forFilter">
            <h2>{prop.heading}</h2>
            <div><p>{prop.category1}</p><i class="fa-solid fa-plus"></i></div>
            <div><p>{prop.category2}</p><i class="fa-solid fa-plus"></i></div>
            <div><p>{prop.category3}</p><i class="fa-solid fa-plus"></i></div>
            <div><p>{prop.category4}</p><i class="fa-solid fa-plus"></i></div>
            <div><p>{prop.category5}</p><i class="fa-solid fa-plus"></i></div>
            <div><p>{prop.category6}</p><i class="fa-solid fa-plus"></i></div>
        </div>
    );
}
 
export default ProdCat;