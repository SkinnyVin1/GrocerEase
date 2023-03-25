import "../Components/ShopSlide.css";

const SearchBar = () => {
    return (
        <div className="searchBar">
            <form>
                <input type="text" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    );
}
 
export default SearchBar;