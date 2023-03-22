import "./Category.css";

const Category = (props) => {
  return (
    <div className="category-card">
      <img src={props.image} />
      <span>{props.title}</span>
    </div>
  );
};

export default Category;
