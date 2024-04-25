import { useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const CategoryPage = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const location = useLocation();

  async function fetchProductData(category) {
    setloading(true);
//    if(category){
//           API_URL+=`&category=${category}`;
//    }
    const url = API_URL+`/category/${category}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log("error due to api" + error);
      setPosts([]);
    }
    setloading(false);
  }

  useEffect(() => {
    
    if(location.pathname.includes("category")) {
        const category = location.pathname.split("/").at(-1).replaceAll("%20"," ");
        fetchProductData(category);
        console.log("category is:");
        console.log(category);
      }
  }, [location.pathname]);

  console.log(posts);
  return (
    
   
   <div className="my-8 mt-20 mb-10 bg-white">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 ">
          {posts.map((post) => (
            <Product key={post.id} item={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>Post data not found</p>
        </div>
      )}
    </div>

   
  );
};

export default CategoryPage;