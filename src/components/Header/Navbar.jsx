import User from "../Form/User";
import {Link} from 'react-scroll'

export default function Navbar() {
  const userName = JSON.parse(localStorage.getItem("currentUser"))

  return (
      <nav> 
        <div className="logo">BOOK STORE</div>
        <ul className="list">
          <li className="item-list active">
            <a href="/">Home</a>
          </li>
          <li className="item-list">
            <Link style={{cursor: "pointer"}} to={"AboutUs"} smooth={true}>About Us</Link>
          </li>
          <li className="item-list">
            {/*<a href="#">Offers</a>*/}
            <Link style={{cursor: "pointer"}} to={"Offers"} smooth={true}>Offers</Link>
          </li>
          <li className="item-list">
            {/*<a href="#">BLOG</a>*/}
            <Link style={{cursor: "pointer"}} to={"Blog"} smooth={true}>Our Blog</Link>
          </li>
          <li className="item-list">
            {/*<a href="#">CONTACT</a>*/}
            <Link style={{cursor: "pointer"}} to={"Contact"} smooth={true}>Contact</Link>
          </li>

        </ul>
        <div className={'d-flex'}>
          <Link style={{cursor: "pointer"}} to={"SearchBook"} smooth={true}>Find your books <span
              className={'text-2xl'}>👀 👈</span></Link>
          {userName && <User/>}
        </div>
      </nav>


  );
}
