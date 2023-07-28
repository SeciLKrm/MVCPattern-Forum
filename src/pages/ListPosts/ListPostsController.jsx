import axios from "axios";
import { useEffect, useState } from "react";
import ListPostsView from "./ListPostsView";

export default function ListPostsController() {
  const [blogData, setBlogData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  console.log(userPosts);
  useEffect(() => {
    axios
      .get("http://localhost:3030/posts")
      .then((res) => setBlogData(res.data));
  }, []);

  // kullanıcıya tıklanınca çalışır
  const showUserPosts = (username) => {
    // popup'ı açma
    setShowPopup(!showPopup);
    // parametre olarak gelen kullanıcıya ait postları alma
    const filtered = blogData.filter((post) => post.user === username);

    // state'e gönderme
    setUserPosts(filtered);
  };
  return (
    <>
      <ListPostsView
        blogData={blogData}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        userPosts={userPosts}
        setUserPosts={setUserPosts}
        showUserPosts={showUserPosts}
      />
    </>
  );
}
