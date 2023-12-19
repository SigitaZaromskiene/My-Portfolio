function MobileMenu({mobileMenu}) {

   
    

    
  return (
<div className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
 
  <ul>
    <li><a href="#null">HOME</a></li>
    <li><a href="#section2">ABOUT</a></li>
    <li><a href="#section3">PROJECTS</a></li>
    <li><a href="#section4">CONTACT</a></li>
 
  </ul>
</div>
  );
}

export default MobileMenu;
