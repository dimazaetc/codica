import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import "./search-panel.css";

import logo from "../../images/search-panel-img/logo.png";
const SearchPanel = ({
  value,
  clearInput,
  onChange,
  placeholder,
  id,
  inputClick,
}) => {
  return (
    <div className="form_wrapper">
      <Container>
        <div className="logo_wrapper">
          <img src={logo} alt="logo" />
          <h1>Weather all over the world </h1>
        </div>
        <InputGroup id="main_input" className="mb-3 input_group">
          <InputGroup.Text id="inputGroup-sizing-default">
            Еnter country's (or city's) name
          </InputGroup.Text>
          <FormControl
            size="lg"
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onClick={inputClick}
            aria-label="Default"
            autoComplete="off"
            aria-describedby="inputGroup-sizing-default"
          />

          <Button onClick={clearInput} variant="success">
            ADD
          </Button>
        </InputGroup>
      </Container>
    </div>
  );
};
export default SearchPanel;
