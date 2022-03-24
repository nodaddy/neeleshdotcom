import './App.css';
import 'antd/dist/antd.css';
import { Col, Row, Button } from 'antd';
import { resume } from './assets';

function App() {
  return (
    <div style={{padding: '0px 10px', minHeight: '100vh', fontFamily: 'cinzel'}}>
      <Row>
        <Col span={24} style={{paddingTop: '6vh'}} align="center">
          <img style={{width: '150px'}} src="https://media0.giphy.com/media/pkFr2QFMLrvwlFgvim/giphy.gif?cid=ecf05e475ihf4hp2x9rdxwn122r6p290w6nbgtffqzsx4hju&rid=giphy.gif&ct=g" alt="a"/>
          <br/>
          <br/>
          <h3>Software Engineer by profession but aren't we all gamblers?</h3>
        </Col>
      </Row>
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <Row>
        <Col xs={{span: 24}} md={{span: 0}} align="center">
          Name : Neelesh Sharma <hr/>
          Age : 23 <hr/>
          City : Gurgaon, Haryana <hr/>
          Education : Bachelor of Technolo gy, IIT Roorkee <hr/>
          Expertise : Software Development and Project Management <hr/>

          <Button type="link"><a target="cv" href={resume}>Download CV</a></Button>
          <Button type="link"><a target="resume" href={resume}>Download Resume</a></Button>
        </Col>
        <Col xs={{span: 0}} md={{span: 6}} align="center"></Col>
        <Col xs={{span: 0}} md={{span: 12}} align="center">
          Name : Neelesh Sharma <hr/>
          Age : 23 <hr/>
          City : Gurgaon, Haryana <hr/>
          Education : Bachelor of Technolo gy, IIT Roorkee <hr/>
          Expertise : Software Development and Project Management <hr/>

          <Button type="link"><a target="cv" href={resume}>Download CV</a></Button>
          <Button type="link"><a target="resume" href={resume}>Download Resume</a></Button>
        </Col>
        <Col xs={{span: 0}} md={{span: 6}} align="center"></Col>
      </Row>
    </div>
  );
}

export default App;
