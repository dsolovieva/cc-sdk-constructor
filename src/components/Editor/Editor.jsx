import React from 'react';
import { Form, FormGroup, Label, Col, Row, Input} from 'reactstrap';
import ColorPicker from '../ColorPicker/ColorPicker';
import './Editor.css';


class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {      
      fontSize: getComputedStyle(document.body).getPropertyValue('--fontSize'),
      fontFamily: getComputedStyle(document.body).getPropertyValue('--fontFamily'),
      formBoxShadow: getComputedStyle(document.body).getPropertyValue('--formBoxShadow'),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
    document.querySelector('body').style.setProperty(`--${name}`, value);
  };

  render() {
    return (
        <Form className="Editor">
          <Row>
            <Col>
          <FormGroup>
            <Label size="sm" for="fontSize">Font Size</Label>
            <Input bsSize="sm" id="fontSize" name="fontSize" type="text" defaultValue={this.state.fontSize} onChange={this.handleChange}/>
          </FormGroup>  
          <FormGroup>
            <Label size="sm" for="formBackgroundColor">Form Background Color</Label>
            <ColorPicker property="formBackgroundColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="formLightBackgroundColor">Form Light Background Color</Label>
            <ColorPicker property="formLightBackgroundColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="formLightColor">Form Light Color</Label>
            <ColorPicker property="formLightColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="formTextColor">Form Text Color</Label>
            <ColorPicker property="formTextColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="separatorColor">Separator Color</Label>
            <ColorPicker property="separatorColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="backgroundButtonColor">Background Button Color</Label>
            <ColorPicker property="backgroundButtonColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="buttonColor">Button Color</Label>
            <ColorPicker property="buttonColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="formButtonBackgroundColor">Form Button Background Color</Label>
            <ColorPicker property="formButtonBackgroundColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="dotColor">Dot Color</Label>
            <ColorPicker property="dotColor" />
          </FormGroup>
          </Col>
          <Col>
          <FormGroup>
            <Label size="sm" for="cannedMessagesColor">Canned Messages Color</Label>
            <ColorPicker property="cannedMessagesColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="cannedMessagesBorder">Canned Messages Border</Label>
            <ColorPicker property="cannedMessagesBorder" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="chatReplyMessageBackground">Chat Reply Message Background</Label>
            <ColorPicker property="chatReplyMessageBackground" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="chatMessageBackground">Chat Message Background</Label>
            <ColorPicker property="chatMessageBackground" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="scrollBarColor">Scroll Bar Color</Label>
            <ColorPicker property="scrollBarColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="scrollBarBackground">Scroll Bar Background</Label>
            <ColorPicker property="scrollBarBackground" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="inventoryButtonBackground">Inventory Button Background</Label>
            <ColorPicker property="inventoryButtonBackground" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="inventoryPrimaryLightColor">Inventory Primary Light Color</Label>
            <ColorPicker property="inventoryPrimaryLightColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="inventoryPrimaryDarkColor">Inventory Primary Dark Color</Label>
            <ColorPicker property="inventoryPrimaryDarkColor" />
          </FormGroup>
          <FormGroup>
            <Label size="sm" for="inventoryButtonBorderColor">Inventory Button Border Color</Label>
            <ColorPicker property="inventoryButtonBorderColor" />
          </FormGroup>
          </Col>
          </Row>
        </Form>
    );
  }
}

export default Editor;