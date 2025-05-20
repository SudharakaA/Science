import Breadcrumb from "../components/Breadcrumb";
import about from "../assets/images/about.png";

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb title="About Us" />
      <div className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>Science College-Mount Lavinia</h1>
            <p>
              <b>
                Science College-Mount Lavinia has been making concerted efforts
                for taking a leap towards world class education.
              </b>
              <br />
              It is amongst the leading Government recognized schools in the
              region. Science College-Mount Lavinia is known for its sprawling
              lush green campus and picturesque location. The college is the
              manifestation of the serenity of Mother Nature and is aesthetically
              built in Mount Lavinia.
              <br />
              The college is driven by the vision of delivering world-class
              value-based education and holistic development of the student’s
              personality, enabling them to transform themselves into future
              global leaders.
            </p>
          </div>
          <div className="about-col">
            <img src={about} alt="About" />
          </div>
        </div>

        <div className="mission">
          <h1>Mission</h1>
          <p>
            The mission of Science College-Mount Lavinia is to provide impetus
            to faculty, learners, and staff by developing their innate
            intellectual capabilities, creative abilities, and entrepreneurial
            mind-set for the socio-economic development of the nation. We empower
            learners to become adaptive and agile global professionals through
            unique specialized programs building academia-industrial partnership.
            We nurture learners to be intellectually curious, technologically
            equipped, mentally sound, physically fit, spiritually elevated,
            socio-culturally sensitive, and environmentally conscious through
            continuous holistic education for the ever-evolving world. We provide
            technology-enabled learner-driven curriculum, value added courses,
            simulated learning environments, state-of-the-art infrastructure,
            and opportunities for community engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
