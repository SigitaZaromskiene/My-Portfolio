import Btn from "../Btn";

function UploadCV() {
  const handleDownload = () => {
    const cvUrl = 'https://www.dropbox.com/scl/fi/ijwmsg1qvjtl8p7hjvry1/CV-FRONT-END.pdf?rlkey=rhm7252orlpmt0kd93x9koril&dl=0'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'cv.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Btn text="RESUME" className="btn + btn_active" action={handleDownload}/>
    </div>
  );
}

export default UploadCV;