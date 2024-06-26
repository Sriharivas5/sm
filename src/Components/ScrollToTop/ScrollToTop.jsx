import React, {useState} from 'react'; 
import  "./ScrollToTop.css"
const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
	
	<button onClick={scrollToTop} 
	style={{display: visible ? 'inline' : 'none'}} id='scrollToTop'>&#8593; </button> 
	
); 
} 

export default ScrollButton; 
