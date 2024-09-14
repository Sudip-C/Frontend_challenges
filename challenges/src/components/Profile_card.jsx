import '../CSS/P_card.css'

function ProfileCard(){
    return(
        <section className="main">
        <div className="curved-box">
            <div className="profile-img">
              <img src="photos/profile_pic.jpg" alt="Profile Picture"/>
            </div>
            <div className="curves"></div>
          </div>
      <div className="profile_name">
        <h1>Jhon Doe</h1>
        <p>@jhondoe</p>
      </div>
      <div className="social_media">
        <img src="photos/facebook-svgrepo-com.svg" alt="facebook" />
        <img src="photos/linkedin-svgrepo-com.svg" alt="linkedin" />
        <img src="photos/x-social-media-black-icon.svg" alt="twitter" />
        <img src="photos/instagram-svgrepo-com.svg" alt="instagram" />
        <img src="photos/basketball-svgrepo-com.svg" alt="basketball" />
      </div>
      <div className="description">
        <p>
          Crafting brand and communication strategies,creating visual designs,
          leadin art direction, and capturing potraits through photography.
        </p>
      </div>
      <div className="buttons">
        <button>Follow</button>
        <button>Message</button>
      </div>
    </section>
    )
}

export default ProfileCard;