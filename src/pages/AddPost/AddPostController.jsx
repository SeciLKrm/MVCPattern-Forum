import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddPostController() {
  // model class'ından bir örnek oluşturma
  const model = new AddPostModel();
  // formun state'ini burada tutucaz
  const [formState, setFormState] = useState(model.state);
  console.log(formState);

  const navigate = useNavigate();
  // inputların veri tiplerini ve değerlerini alıp
  // state'e aktaracak fonksyion
  const onInputChange = (label, value) => {
    // state'in kopyasını alma
    let copyState = { ...formState };

    // bize gelen label değerine göre kopya state'teki eşleşen özelliği günceller
    copyState[label] = value;
    // gerçek state'i güncelleme
    setFormState(copyState);
  };
  // formun gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();
    const letters = /^[A-Za-z]+$/;
    if (!formState.user || !formState.title || !formState.text) {
      alert("Lütfen boş alanları doldurunuz");
      return;
    } else if (!formState.user.match(letters)) {
      alert("Kullanıcı adı sayı ve özel karakter içeremez");
      return;
    }
    axios
      .post("http://localhost:3030/posts", formState)
      .then(() => navigate("/"));
  };

  return (
    <>
      <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
    </>
  );
}
