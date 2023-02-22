import '../Styles/About.css'
const About = () => {
  return (
    <div className="about">
      Here at Theme Park Haters, Inc., we were tired of visiting sub-par theme
      parks and we decided to let people know about it. Now you can avoid making
      the same mistakes we did with our helpful information on some of the worst
      parks out there. You're welcome!
      <div className="creatives">
        <h4>
          <u>Creative team:</u>
        </h4>
        <h4>
          Freddy Caione
          <a
            href="https://www.linkedin.com/in/frederickcaione"
            class="social-icon si-rounded si-small si-linkedin"
          >
            <i class="icon-linkedin"></i>
            <i class="icon-linkedin"></i>
          </a>
        </h4>
        <h4>Sarah Maher</h4>
        <h4>Liz Martins</h4>
      </div>
    </div>
  )
}

export default About
