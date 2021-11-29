import React, {useRef, useEffect } from "react";
import { gsap } from "gsap";
import './App.css'


function App() {
  const headerRef = useRef(null);
  useEffect(() => {
    gsap.from(headerRef.current, {
        duration: 2,
        autoAlpha: 0,
        ease: "none",
        delay: 1
      });
  }, []);
  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptas
          explicabo, ipsum laboriosam mollitia repellat neque numquam tenetur
          facilis sint natus dicta ducimus recusandae magni fuga odit at aperiam
          voluptatem dolorum totam? Doloremque expedita quos, omnis similique ad
          beatae aliquid reprehenderit incidunt temporibus voluptatum iste
          aspernatur, odio ducimus. Error, accusantium.
        </p>
      </header>
      <main className="App-main">
        <div className="App-section"></div>
        <h2>Title</h2>
        <p>Subtitle</p>
      </main>
    </div>
  );
}

export default App;
