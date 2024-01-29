import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Typed_script = () => {
  useEffect(() => {
    var typed = new Typed(".typing", {
      strings: ["Developer", "Backend Developer", "Student", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []); 


};

export default Typed_script;
