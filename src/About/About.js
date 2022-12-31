// import { Navbar } from "react-bootstrap";
import './About.css'
const About = () =>{
    return (
       <>
            <section>
        <div class="about">
            <div class="container">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore soluta dolores mollitia eos cum
                    eligendi, alias atque, ducimus quas natus obcaecati velit delectus a sed vero ex, distinctio in iste
                    vel aut. Nisi debitis, </p>
                <div class="mid">
                    <div class="row row1">
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                    </div>
                    <div class="row row2">
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                        <p>Lorem ipsum dolor.</p>
                    </div>
                </div>

                <div class="after-mid">
                    <div class="row row1">
                        <h4>5000</h4>
                        <p>Product</p>
                    </div>
                    <div class="row row2">
                        <h4>400</h4>
                        <p>Store</p>
                    </div>
                    <div class="row row3">
                        <h4>200</h4>
                        <p>Places</p>
                    </div>
                    <div class="row row4">
                        <h4>300</h4>
                        <p>Guid</p>
                    </div>
                </div>


                <div class="footer">
                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <div class="button">
                        <a href="/" >Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
          {/* <Navbar bg="dark" expand="lg" variant='dark' className="p-5" > <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Navbar> */}
       </>
    )
   }
   
   export default About;