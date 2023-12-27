import Btn from "../Btn";

function UploadCV() {
  const handleDownload = () => {
    const cvUrl = 'https://www.dropbox.com/scl/fi/2x3cqykncn0dop0w6ddh2/FRONT-END-CV.pdf?rlkey=i0rem2qeyi1raj1zbgd8ld2qg&dl=0'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.target = '_blank'
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