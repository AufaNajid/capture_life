import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import imagePath from "./logo aple.jpg";

function page() {
  let items = ["Home", "Product", "Services"];
  return (
    <div>
      <Navbar brandName="MP Codes" 
      imageSrcPath={imagePath} 
      navItems={items} />
    </div>
  );
}

export default page;
