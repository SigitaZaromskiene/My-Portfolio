import MyCV from "../../UI/Img/MyCV.pdf";
import Btn from "../Btn";

function UploadCV() {
  return (
    <Btn className="btn btn_active" href={MyCV} download="MY_CV.pdf">
      {" "}
      RESUME{" "}
    </Btn>
  );
}

export default UploadCV;
