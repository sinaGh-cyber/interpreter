export const Field = ({ setText }) => {
  return (
    <div>
      <label htmlFor="input"> :متن خود را وارد کنید</label>
      <input
        onChange={(e) => {
          if (e.target.value) setText(e.target.value);
        }}
        type="text"
        id="input"
      />
    </div>
  );
};
