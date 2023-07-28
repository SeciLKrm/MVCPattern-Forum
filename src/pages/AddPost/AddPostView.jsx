export default function AddPostView({ handleSubmit, onInputChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Kullanıcı Adı</label>
        <input
          type="text"
          onChange={(e) => onInputChange("user", e.target.value)}
          placeholder="Kullanıcı Adı Giriniz"
        />
      </fieldset>
      <fieldset>
        <label>Başlık</label>
        <input
          type="text"
          onChange={(e) => onInputChange("title", e.target.value)}
          placeholder="Başlık  Giriniz"
        />
      </fieldset>
      <fieldset>
        <label>Mesaj</label>
        <textarea
          onChange={(e) => onInputChange("text", e.target.value)}
          type="text"
          placeholder="Mesajınızı Giriniz"
        />
      </fieldset>
      <button>Gönder</button>
    </form>
  );
}
