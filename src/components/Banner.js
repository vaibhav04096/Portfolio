
import{Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap"

export const Banner =()=>{
    return(
        <section className="banner" id="home">
            <Container>
            <Row className="align-item-center">
                <Col xs={12} md ={6}xl ={7}>
                    <span className="tagline">Welcome to my Portfoolio</span>
                    <h1>{`Hi I'm Web Developer`}<span className="wrap">Front-End-Developer</span></h1>
                    <p>lorem ippson</p>
                    <button onClick={()=>console.log('connect')}>Lets Connect <ArrowRightCircle size ={25}/></button>
                </Col>
                <Col xs={12} md ={6}xl ={5}>
                    <img src ="url" alt="Headder Img"/>
                </Col>

            </Row>
            </Container>

        </section>
    )
}