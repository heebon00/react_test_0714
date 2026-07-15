import "./Picture.css";

const Picture = (props) => {
  return (
    <div className="Picture-wrap">

    <span className="picture-label"> 이미지 </span>
      <img className="pictureImage" src="http://qwerew.cafe24.com/images/pet-1.jpg" alt=""></img>
    </div>
  );
};
export default Picture;
