import Popup from "../../components/Popup";

const ListPostsView = ({
  userPosts,
  blogData,
  showPopup,
  setShowPopup,
  setUserPosts,
  showUserPosts,
}) => {
  if (!blogData) return "Loading";
  return (
    <div className="container">
      {blogData.map((post) => (
        <div key={post.id} className="post">
          <div className="post-info">
            <h1>{post.title}</h1>
            <i onClick={() => showUserPosts(post.user)}>{post.user} </i>
          </div>
          <p className="post-text">{post.text} </p>
        </div>
      ))}
      {showPopup && <Popup userPosts={userPosts} setShowPopup={setShowPopup} />}
    </div>
  );
};

export default ListPostsView;
