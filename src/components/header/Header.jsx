import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Retro Tech</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.ibb.co/vdQ8FbT/britt-gaiser-ETRn6y-JN5-SM-unsplash.jpg"
        alt=""
      />
    </div>
  );
}
