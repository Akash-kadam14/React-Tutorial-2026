import { Bookmark } from "lucide-react";

const Card = (props) => {
  console.log(props.obj.obj);
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.obj.logo} alt="" />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.obj.name} <span>{props.obj.datePosted}</span>
          </h3>
          <h2>{props.obj.post}</h2>
          <div>
            <h4>{props.obj.tag1}</h4>
            <h4>{props.obj.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>{props.obj.pay}</h4>
          <p>{props.obj.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Card;
