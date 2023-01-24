import "./Popup.css";
import ClearIcon from "@mui/icons-material/Clear";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const Popup = ({ setShowpopup }) => {
  return (
    <div className="popup">
      <div className="popupcard">
        <ClearIcon className="popupicon" onClick={() => setShowpopup(true)} />
        <div className="popuptext">
          <h2>Yoo!. I got you message</h2>
          <InsertEmoticonIcon className="popupicon1" />
          <h1 className="thanks">Thanks</h1>
        </div>
      </div>
    </div>
  );
};

export default Popup;
