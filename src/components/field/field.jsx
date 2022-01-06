export const Field = ({ setText }) => {
  return (
    <div>
      <input
        onChange={(e) => {
          if (e.target.value) setText(e.target.value);
        }}
        type="text"
        id="input"
      />
      <label htmlFor="input"> :متن خود را وارد کنید</label>
    </div>
  );
};
