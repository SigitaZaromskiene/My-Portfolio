import MyCV from "../../UI/Img/MyCV.pdf";

function UploadCV() {
  return (
    <a className="btn btn_active" href={MyCV} download="MY_CV.pdf">
      {" "}
      RESUME{" "}
    </a>
  );
}

export default UploadCV;
