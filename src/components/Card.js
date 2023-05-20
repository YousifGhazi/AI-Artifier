import { saveAs } from "file-saver";

const Card = ({ post }) => {
  function download() {
    saveAs(post.img, "image");
  }
  return (
    <div className="card">
      <img src={post.img} alt="" />
      <div className="details">
        <p>{post.prompt}</p>
        <div className="wrapper">
          <span>{post.name[0]}</span>
          <p>{post.name}</p>
          <button className="download-btn btn" onClick={download}>
            <img src="/download.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
