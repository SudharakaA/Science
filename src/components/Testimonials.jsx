import male from '../assets/images/male.jpg';
import female from '../assets/images/female.webp';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h1>PRINCIPAL'S MESSAGE</h1>
            <div className="row">
                <div className="testimonials-col">
                    <img src={male} alt="Mr. RSTU" />
                    <div>
                        <p>
                        At our school, we believe in nurturing not just academic excellence, but also strong values and life skills. 
                        Our dedicated teachers and staff work tirelessly to create a safe, inclusive, and inspiring environment for every student. 
                        We encourage curiosity, creativity, and collaboration, preparing our students to become responsible citizens and future leaders. 
                        I am proud of our vibrant school community and invite all students to make the most of every opportunity here.
                        </p>
                        <h3>Mr. RSTU</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>

                <div className="testimonials-col">
                    <img src={female} alt="Ms. ABCD" />
                    <div>
                        <p>
                        My experience at this school has been truly rewarding. 
                        The supportive teachers and friendly classmates have helped me grow both academically and personally. 
                        The school offers a variety of clubs and activities, allowing us to discover our interests and talents. 
                        I am grateful for the encouragement and guidance I have received, and I look forward to achieving more milestones here.
                        </p>
                        <h3>Ms. ABCD</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;