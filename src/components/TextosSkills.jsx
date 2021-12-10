import React from 'react';
import Rotate from 'react-reveal/Rotate';
// import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'

class TextosSkills extends React.Component {

  // const {width} = useContext(ProfesionaInfoContext)
  
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ show: !this.state.show });
  }




  render() {
    return (
      <div className="section2" onMouseEnter={this.handleClick} onMouseLeave={this.handleClick} onClick={this.handleClick}>
        <Rotate top right cascade when={this.state.show}>
        <h2>Technologies</h2>
          <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>Css ( Cascading style Sheet )</li>
                <li>Html ( HyperText Markup Language )</li>
                <li>Tailwind</li>
                <li>Sass</li>
                <li>Python</li>
                <li>Node js</li>
                <li>Bootstrap</li>
          </ul>
        </Rotate>
      </div>
    );
  }
}

export default TextosSkills;