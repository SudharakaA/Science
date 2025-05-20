import Breadcrumb from "../components/Breadcrumb"

const Contact = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5330.852683286492!2d79.87284454267498!3d6.835076453832243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25be1975c759d%3A0xa1823bb22a965071!2sScience%20College%20(National%20Collage)!5e0!3m2!1sen!2slk!4v1747699487566!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Science College Location"
          ></iframe>
        </div>

        <div className="contact-us">
          <div className="row">
            <div className="contact-col">
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>Science College</h5>
                  <p>Templers Road, Mount Lavinia</p>
                </span>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <span>
                  <h5>011-26912901</h5>
                  <p>School hours: 7:00 am to 1.30pm</p>
                </span>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <span>
                  <h5>For General Enquiry: info@mituniversity.edu.in</h5>
                  <p>For Admissions: admissions@mituniversity.edu.in</p>
                </span>
              </div>
            </div>

            <div className="contact-col">
              <form action="#">
                <input type="text" placeholder="Enter your name" required />
                <input type="email" placeholder="Enter your email address" required />
                <input type="text" placeholder="Enter your subject" required />
                <textarea rows="8" placeholder="Message" required></textarea>
                <button type="submit" className="hero-btn blue-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;