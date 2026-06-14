import "./profile.css";

function Profile() {
  return (
    <div id="profile">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150"
          alt="profile"
        />

        <h2>Soumya</h2>
        <p>Frontend Developer</p>

        <div className="info">
          <p>Email: soumya@example.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;