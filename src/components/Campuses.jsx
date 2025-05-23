import campus01 from '../assets/images/campus01.jpg'
import campus02 from '../assets/images/Ground.jpeg'
import campus03 from '../assets/images/images-1.jpg'

const Campuses = () => {
    return (
        <section className="campus">
            <h1>Latest News</h1>
            <div className="row">
                <div className="campus-col">
                    <img src={campus01} alt="Campus" />
                    <div className="layer">
                        <h3>President Trophie</h3>
                    </div>
                </div>

                <div className="campus-col">
                    <img src={campus02} alt="Campus" />
                    <div className="layer">
                        <h3>Ground</h3>
                    </div>
                </div>

                <div className="campus-col">
                    <img src={campus03} alt="Campus" />
                    <div className="layer">
                        <h3>Rugby</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Campuses;