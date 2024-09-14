import "../CSS/login.css";
export const Login = () => {
  return (
    <div className="login_page">
      <div className="login_left">
        <h1>Contact Us</h1>
        <p>
          Get in touch with us! Whether you have question, feedback, or just ant
          to say hello, we're here for you
        </p>
      </div>
      <form className="login_form">
        <h3>Send us a message</h3>
        <input type="text" name="" id="" placeholder="Name" />
        <input type="email" name="" id="" placeholder="Email" />
        <input type="number" name="" id="" placeholder="Mobile Number" />
        <p>Preffered contact method of communication</p>
        <div>
          <input type="radio" />
          <label htmlFor="">Email</label>
          <input type="radio" />
          <label htmlFor="">Phone</label>
        </div>
        <textarea className="textArea" placeholder="Message" />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};
