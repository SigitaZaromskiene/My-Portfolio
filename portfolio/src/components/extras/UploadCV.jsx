import Btn from "../Btn";

function UploadCV() {
  const handleDownload = () => {
    // Replace 'https://www.yourwebsite.com/path/to/cv.pdf' with the actual direct download URL to your CV file
    const cvUrl = 'https://www.dropbox.com/scl/fi/ijwmsg1qvjtl8p7hjvry1/CV-FRONT-END.pdf?rlkey=rhm7252orlpmt0kd93x9koril&dl=0'; // Update with your Dropbox link
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'cv.pdf'; // The name to be used when downloading
    document.body.appendChild(link);

    // Programmatically trigger the click event to initiate download
    link.click();

    // Clean up - remove the temporary link from the DOM
    document.body.removeChild(link);
  };

  return (
    <div>
      <Btn text="RESUME" className="btn + btn_active" action={handleDownload}/>
    </div>
  );
}

export default UploadCV;