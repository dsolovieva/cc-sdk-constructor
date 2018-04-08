import React from 'react';
import { InputGroup, Input, InputGroupButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { ChromePicker } from 'react-color';
import './ColorPicker.css';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      dropdownOpen: false,
      value: getComputedStyle(document.body).getPropertyValue(`--${props.property}`),
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleChangeComplete = (color) => {
    this.setState({ value: color.hex });
    document.querySelector('body').style.setProperty(`--${this.props.property}`, color.hex);
  };

  render() {
    return (
      <InputGroup>
        <Input bsSize="sm" name={this.props.property} id={this.props.property} value={this.state.value} />
        <InputGroupButtonDropdown className="ColorPicker__Button" size="sm" addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
          <DropdownToggle style={{'backgroundColor': this.state.value}}/>
          <DropdownMenu className="p-0">
            <ChromePicker 
              color={ this.state.value }
              onChangeComplete={ this.handleChangeComplete }/>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
    );
  }
}

export default ColorPicker;