import { BiRupee } from "react-icons/bi";
const Review = ({ img, title, des, price }) => {
  return (
    <div className="menu-container">
      <img src={img} alt={title} />
      <div className="menu-description">
        <div>
          <h3 className="menuTitle">{title}</h3>
          <div className="spanComponent">
            <span className="price">
              {price}
              <BiRupee />
            </span>
          </div>
        </div>
        <hr className="menu-underline" />
        <div>
          <p className="desc">{des}</p>
        </div>
      </div>
    </div>
  );
};
export default Review;
