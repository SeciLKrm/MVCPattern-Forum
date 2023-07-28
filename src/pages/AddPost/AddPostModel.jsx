class AddPostModel {
  // form gönderilince apiye post
  // yapacağımız verinin ilk halini
  // burada tuttuk
  state = {
    id: new Date().getTime(),
    user: "",
    title: "",
    text: "",
  };
}
export default AddPostModel;
