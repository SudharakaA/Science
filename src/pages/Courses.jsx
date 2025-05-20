import Breadcrumb from "../components/Breadcrumb";

const Courses = () => {
  return (
    <>
     <Breadcrumb title="Sports" />
      <section className="course">
        <h1>Sports</h1>
        <p>
          Our college offers a vibrant sports program to promote teamwork, discipline, and physical fitness. Here are some of the main sports:
        </p>
        <div className="row">
          <div className="course-col">
            <h3>Rugby</h3>
            <p>
              Rugby is one of the most popular sports at our college. Our rugby team participates in inter-school and national tournaments, with regular training sessions for all skill levels.
            </p>
          </div>
          <div className="course-col">
            <h3>Cricket</h3>
            <p>
              Cricket has a rich tradition here. Our team has won several championships, and we offer excellent facilities for practice and matches throughout the year.
            </p>
          </div>
          <div className="course-col">
            <h3>Football</h3>
            <p>
              Football is a favorite among students, with regular training and matches. Our team competes in various leagues and tournaments.
            </p>
          </div>
          <div className="course-col">
            <h3>Basketball</h3>
            <p>
              Our basketball program encourages participation at all levels. Students can join the team or play in friendly matches organized on campus.
            </p>
          </div>
          <div className="course-col">
            <h3>Handball</h3>
            <p>
              Handball is growing in popularity at our college. We provide coaching and opportunities to compete in inter-school events.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;