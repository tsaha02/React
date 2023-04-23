function Section() {
  return (
    <section className="sections">
      <section id="home">
        <div class="main">
          <h1 class="animate__animated animate__bounce">
            I &nbsp;&nbsp;AM <br />
            TANMOY SAHA
          </h1>
          <button class="btn">Hire Me</button>
        </div>
      </section>
      <section id="about">
        <div id="pic">
          <img
            src="./Images/depositphotos_71818631-stock-photo-sticky-note-about-me-concept.jpg"
            alt="about me"
          />
        </div>
        <div id="intro">
          <h1 class="headings">ABOUT ME</h1>
          <p>
            <h2>EDUCATION</h2>
            <b> SECONDARY EDUATION 2015: </b>Secondary Examination from
            Bethuadahari J.C.M. High School under West Bengal Board of Secondary
            Education with 63%.
            <br /> <b>HIGHER SECONDARY EDUCATION 2017:</b> Higher secondary
            Examination from Bethuadahari J.C.M. High School under West Bengal
            Council of Higher Secondary Education (WBCHSE) with 80%.
            <br />
            <b>BACHELOR OF ARTS 2020 :</b> B.A in Education Honours, from
            University Of Kalyani with 66%.
          </p>
        </div>
      </section>
      <section id="portfolio">
        <h1 class="headings">PORTFOLIO</h1>
        <div class="gallery">
          <img
            src="./Images/Internet_Business_Technology_HD_Wallpaper_15_1366x768.jpg"
            alt="image1"
          />
          <img src="./Images/pexels-bich-tran-669996.jpg" alt="image2" />
          <img src="./Images/pexels-hasan-albari-1229861.jpg" alt="image3" />
          <img
            src="./Images/istockphoto-1143736474-612x612.webp"
            alt="image4"
          />
        </div>
      </section>
    </section>
  );
}
export default Section;
