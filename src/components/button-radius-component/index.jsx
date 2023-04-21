import "./styles.css";

export default function ButtonRadiusComponent({
  name,
  image,
  backgroundColor,
  foregroundColor
}) {
  return (
    <div
      className="button-radius"
      style={{
        color: `${foregroundColor}`,
        backgroundColor: `${backgroundColor}`
      }}
    >
      {element(name, image)}
    </div>
  );
}

const element = (name, image) => {
  if (name) {
    return name;
  } else {
    return <img src={image} className="icon-image" alt="" />;
  }
};
