export const AllPartnerIconComponent = (props) => {

  const Icons = () => {
      props.socialIcons.map((icon) => {
        return(
          <i
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className={icon}
          ></i>
        )
      })
  }  
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "220px",
        marginTop: "10px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          background: "#fff",
          color: "#111",
          borderRadius: "100px",
          cursor: "pointer",
        }}
      >
        <a className="social-links" href="https://www.linkedin.com/in/john-nkpolukwu-521201138/">
        <i
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          className="fab fa-linkedin-in fa-1x"
        ></i></a>
      </div>
      <div
        style={{
          background: "#fff",
          color: "#111",
          width: "32px",
          height: "32px",
          borderRadius: "100px",
          cursor: "pointer",
        }}
      > 
        <a className="social-links" href="https://github.com/Johnnsonkp">
        <i
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          className="fab fa-github fa-1x"
        ></i></a>
      </div>
      <div
        style={{
          background: "#fff",
          color: "#111",
          width: "32px",
          height: "32px",
          borderRadius: "100px",
          cursor: "pointer",
        }}
      > 
        <a className="social-links" href="https://github.com/Johnnsonkp">
        <i
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          className="fab fa-twitter fa-1x"
        ></i></a>
      </div>
      <div
        style={{
          background: "#fff",
          color: "#111",
          width: "32px",
          height: "32px",
          borderRadius: "100px",
          cursor: "pointer",
        }}
      > 
        <a className="social-links" href="https://codepen.io/Johnnsonkp">
        <i
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          className="fab fa-codepen fa-1x"
        ></i></a>
      </div>
      <div
        style={{
          background: "#fff",
          color: "#111",
          width: "32px",
          height: "32px",
          borderRadius: "100px",
          cursor: "pointer",
        }}
      >
         <a className="social-links" href="https://www.instagram.com/johnnsonkp/">
        <i
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          className="fab fa-instagram fa-1x"
        ></i></a>
      </div>
    </div>
  );
};
