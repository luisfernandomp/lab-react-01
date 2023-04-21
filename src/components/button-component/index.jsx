import "./styles.css";

export default function ButtonComponent({
  name,
  foregroundColor,
  backgroundColor
}) {
  return (
    <button
      className="button"
      style={{
        color: `${foregroundColor}`,
        backgroundColor: `${backgroundColor}`
      }}
    >
      {name}
    </button>
  );
}
