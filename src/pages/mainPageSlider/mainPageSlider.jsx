import React from 'react';
import './mainPageSlider.css';

function MainPageSlider11() {
  return (

    <section id='carousel'>
        <input type="radio" name="slider" id="s1"/>
        <input type="radio" name="slider" id="s2"/>
        <input type="radio" name="slider" id="s3" checked />
        <input type="radio" name="slider" id="s4"/>
        <input type="radio" name="slider" id="s5"/>
        <label htmlFor="s1" id="slider1">
        <div className="colum">
            <img  src="https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" width="100%" height="100%"/>
            
            <h6>THis is column1</h6>
        </div>
        </label>
        <label htmlFor="s2" id="slider2">
        <div className="colum">
            <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" width="100%" height="100%"/>
            
            <h6>THis is column1</h6>
        </div>
        </label>
        <label htmlFor="s3" id="slider3">
        <div className="colum">
            <img src="https://plus.unsplash.com/premium_photo-1682377521566-f70ac8abe597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" width="100%" height="100%"/>
            
            <h6>hfhglgjglkj</h6>
        </div>
        </label>
        <label htmlFor="s4" id="slider4">
        <div className="colum">
            <img src="https://images.unsplash.com/photo-1417716146732-918825b83fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" width="100%" height="100%"/>
            
            <h6>iutt</h6>
        </div>
        </label>
        <label htmlFor="s5" id="slider5">
        <div className="colum">
            <img src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" width="100%" height="100%"/>
            
            <h6>fjfk</h6>
        </div>
        </label>
       
    </section>
    
    

   
  );
}

export default MainPageSlider11;
