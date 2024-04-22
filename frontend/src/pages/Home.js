import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Downtown Volunteers";
  }, []);

  return (
    <div className="home" style={styles.container}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzwk1Z25v1Xw1Ws6h2QXfGQoaMDDnUOijJLLDk94xFw&s" alt="Logo"
            className="logo" style={{ height: "150px", width: "auto" }} />
      <div className="section">
        <h2 style={styles.sectionTitle}>About Us - Admin Page</h2>
        <p style={styles.paragraph}>
          Inspired by the Project Downtown Gainesville Nonprofit Organization,
          we desire to provide a platform for volunteers to help those in need.
          With this platform users will be able to easily find volunteer
          opportunities and sign up for them.
        </p>
      </div>

      <div className="section">
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <div className="section">
  <img
    src="https://static.wixstatic.com/media/94f97e_1aabad0a528541099d6ea3ebae68f19f~mv2.jpg/v1/fill/w_496,h_370,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94f97e_1aabad0a528541099d6ea3ebae68f19f~mv2.jpg"
    alt="Logo"
    style={styles.image}
    width= "400px"
    height= "auto"
  />
  <img
    src="https://static.wixstatic.com/media/94f97e_f7ef4c5d8ff74c9a9369dfacccfebf17~mv2.png/v1/crop/x_219,y_1213,w_2585,h_2415/fill/w_448,h_418,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/94f97e_f7ef4c5d8ff74c9a9369dfacccfebf17~mv2.png"
    alt="Logo"
    style={styles.image}
    width= "400px"
    height= "auto"
  />
  <img
    src="https://static.wixstatic.com/media/94f97e_4d11cbfc67cb42ea971a04e73b019b7d~mv2.jpg/v1/crop/x_332,y_0,w_3685,h_3024/fill/w_510,h_418,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94f97e_4d11cbfc67cb42ea971a04e73b019b7d~mv2.jpg"
    alt="Logo"
    style={styles.image}
    width= "400px"
    height= "auto"
  />
</div>
        <p style={styles.paragraph}>
          Project Downtown Gainesville wants to spread the message of hope and
          compassion. We believe that a single action can make a difference in
          the community, and that collective action can greatly impact the
          world. Through advocacy and outreach activities, our team works
          tirelessly each day to contribute their part to the greater good.
        </p>
        <p style={styles.paragraph}>
          <a
            href="https://www.pdgainesville.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Learn more about Project Downtown Gainesville Here
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    color: "#333",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  paragraph: {
    lineHeight: "1.6",
    fontSize: "16px",
    textAlign: "left",
    marginBottom: "5 0px"

  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  image: {
    marginRight: "25px",
    marginBottom: "50px"
  }
};



export default Home;
