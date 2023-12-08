import { Link } from "react-router-dom";
import config from "../../config";

export default function User() {
  return (
    <div>
      <Link to={config.routes.userInformation}>
        <img
          width={40}
          height={40}
          src="https://cdn.vectorstock.com/i/1000x1000/79/06/cute-santa-with-a-christmas-present-flat-vector-39797906.webp"
          alt=""
        />
      </Link>
    </div>
  );
}
