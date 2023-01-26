
import { Link } from 'react-router-dom'
import './About.css'
const About = () => {

    return (
        <>
            <section>
                <div className="about">
                    <div className="container">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore soluta dolores mollitia eos cum
                            eligendi, alias atque, ducimus quas natus obcaecati velit delectus a sed vero ex, distinctio in iste
                            vel aut. Nisi debitis, </p>
                        <div className="mid">
                            <div className="row row1">
                                <p>Lorem ipsum dolor.</p>
                                <p>Lorem ipsum dolor.</p>
                                <p>Lorem ipsum dolor.</p>
                            </div>
                            <div className="row row2">
                                <p>Lorem ipsum dolor.</p>
                                <p>Lorem ipsum dolor.</p>
                                <p>Lorem ipsum dolor.</p>
                            </div>
                        </div>

                        <div className="after-mid">
                            <div className="row row1">
                                <h4>5000</h4>
                                <p>Product</p>
                            </div>
                            <div className="row row2">
                                <h4>400</h4>
                                <p>Store</p>
                            </div>
                            <div className="row row3">
                                <h4>200</h4>
                                <p>Places</p>
                            </div>
                            <div className="row row4">
                                <h4>300</h4>
                                <p>Guid</p>
                            </div>
                        </div>


                        <div className="footer">
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                            <div className="button">
                                <Link to="/Contact" >Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;