import { Bookmark } from "lucide-react";

const Card = ({obj} = props.obj) => {
  console.log(obj);
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={obj.logo} alt="" />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            {obj.name} <span>{obj.datePosted}</span>
          </h3>
          <h2>{obj.post}</h2>
          <div>
            <h4>{obj.tag1}</h4>
            <h4>{obj.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>{obj.pay}</h4>
          <p>{obj.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Card;
