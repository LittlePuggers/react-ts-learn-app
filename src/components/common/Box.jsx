export function Box({ img, tag, title, date, duration }) {
  return (
    <article className="box">
      <img src={img} alt={title}></img>
      <p>{tag}</p>
      <h3>{title}</h3>
      <div className="time-row">
        <p>{date}</p>
        <p>{duration}</p>
      </div>
    </article>
  );
}
