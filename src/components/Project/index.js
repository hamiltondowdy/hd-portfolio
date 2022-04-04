import React from "react";
import projects from "../../projects.json";
import TechListItem from "../TechListItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjImg from "../../img/proj2.png";
import "./style.css"
import {  Col, Row , Container, Card, Button } from 'react-bootstrap';


function Project() {
    return projects.map(project => {
        // project is an even number, it will image left and text right
        if (projects.indexOf(project) === 0 || projects.indexOf(project) %2 === 0 ) {
            return (

            <Container>
             <Row>
     
  <h3 className="display-6">Projects</h3>
    
        <Col className="coll">
        <Card style={{ width: '18rem' , backgroundColor: '#f1f2f5'}}>
  <Card.Img variant="top" src={ProjImg} />
  <Card.Body>
    <Card.Title>Penguin Post</Card.Title>
    <Card.Text>
      A social media app
    </Card.Text>
    <Button variant="primary" className="neo-button" id="pp"><i className="fa fa-github fa-lg"> </i></Button>
  </Card.Body>
</Card>
</Col>       
<Col>
<Card style={{ width: '18rem' , backgroundColor: '#f1f2f5'}}>
  <Card.Img variant="top" src={ProjImg} />
  <Card.Body>
    <Card.Title>Penguin Post</Card.Title>
    <Card.Text>
      A social media app
    </Card.Text>
    <Button variant="primary" className="neo-button" id="pp"><i className="fa fa-github fa-lg"> </i></Button>
  </Card.Body>
</Card></Col> 

<Col>
<Card style={{ width: '18rem' , backgroundColor: '#f1f2f5'}}>
  <Card.Img variant="top"  width="70%" src={ProjImg} />
  <Card.Body>
    <Card.Title>Penguin Post</Card.Title>
    <Card.Text>
      A social media app
    </Card.Text>
    <Button variant="primary" className="neo-button" id="pp"><i className="fa fa-github fa-lg"> </i></Button>
  </Card.Body>
</Card>
</Col>
    

  </Row>
</Container>
                
            )
            // otherwise image will be right and text left
        } else {
            return (
                <div className="row projectRow">
                    <div className="col-sm">
                    <h4 className="projectTitle">{project.title}</h4>
                    <p className="projectAbout">{project.about}</p>
                    <ul className="technologies">
                        <TechListItem techItems={project.technologies}></TechListItem>
                    </ul>
                        <div className="row">
                            <button type="button" className="button-67"><a className="repoLink" href={project.repo}>Repo</a></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={ProjImg} alt={project.title} width="200px"></img>
                    </div>
                </div>
            )
        }
    })
}

export default Project;
