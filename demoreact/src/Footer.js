function Footer() {
  return (
    <footer id="Contact">
      <div class="contactInfo">
        <h1>CONTACT ME</h1>
        <h3>Mobile - 7602315138</h3>
        <h3>Email - tanmoysaha710@gmail.com</h3>
      </div>
      <div id="contactBox">
        <div id="heading5">
          <p>Submit Your Details</p>
        </div>
        <table>
          <tr>
            <td>
              <label for="name">Your Name</label>
            </td>
            <td>
              <input type="text" name="text" id="text" />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <label for="email">Your Email</label>
            </td>
            <td>
              <input type="email" name="email" id="email" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="adress">Your Address</label>
            </td>
            <td>
              {" "}
              <textarea
                name="address"
                id="address"
                cols="30"
                rows="10"
                placeholder="Enter Adress"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">Submit</button>
            </td>
            <td>
              <button type="reset">Reset</button>
            </td>
          </tr>
        </table>
      </div>
    </footer>
  );
}
export default Footer;
