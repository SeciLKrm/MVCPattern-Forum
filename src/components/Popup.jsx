const Popup = ({ setShowPopup, userPosts }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <p className="close" onClick={() => setShowPopup(false)}>
          X
        </p>
        <h3>
          <span>{userPosts[0].user} </span> kullaıcısının gönderileri
          gösteriliyor
        </h3>
        {userPosts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title} </h2>
            <p>{post.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup;
