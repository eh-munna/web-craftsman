export default function Button({ text, onSmash, className }) {
  return (
    <>
      <button className={`${className} cursor-pointer`} onClick={onSmash}>
        {text}
      </button>
    </>
  );
}
