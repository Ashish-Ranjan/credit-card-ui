import "./Modal.scss";
import Wrapper from "./Wrapper";

const Modal = (props) => {
  return <Wrapper>
      <div className="model-bg"></div>
      <div className="model-holder">
          <div className="modal-title">{props.title}</div>
          <div className="modal-description">{props.desc}</div>
          <div className="modal-botton">
              <button onClick={props.closeHandler}>Close</button>
          </div>
      </div>
      </Wrapper>;
};

export default Modal;
