import { scrollToTop } from "./extras/ScrollToTop";
function MobileMenu({mobileMenu, setMobileMenu}) {

    const mobileMenuNotVisible =()=>{
        setMobileMenu(false)
    }


    const toHomeSectionHandler=()=>{
        setMobileMenu(false)
        scrollToTop()
    }
   
    

    
  return (
<div className={`mobile_container ${mobileMenu ? 'active' : ''}`}>
 
  <ul className='mobile_container_menu'>
    <li><a onClick={toHomeSectionHandler}href="#null">HOME</a></li>
    <li><a onClick={mobileMenuNotVisible}href="#section2">ABOUT</a></li>
    <li><a onClick={mobileMenuNotVisible}href="#section3">PROJECTS</a></li>
    <li><a onClick={mobileMenuNotVisible}href="#section4">CONTACT</a></li>
    <svg onClick={mobileMenuNotVisible}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg></ul>
  


</div>
  );
}

export default MobileMenu;
