export function TeamBox({ img, profTitle, teamName, description }) {
  return (
    <article className="team-box">
      <img src={img} alt={teamName}></img>
      <h3>{teamName}</h3>
      <h4>{profTitle}</h4>
      <p>{description}</p>
    </article>
  );
}
