import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WordsLoop = () => {
  const wordListRef = useRef(null);
  const edgeElementRef = useRef(null);

  useEffect(() => {
    const wordList = wordListRef.current;
    const edgeElement = edgeElementRef.current;
    const words = Array.from(wordList.children);
    const totalWords = words.length;
    const wordHeight = 100 / totalWords; // Offset as a percentage
    let currentIndex = 0;

    function updateEdgeWidth() {
      const centerIndex = (currentIndex + 1) % totalWords;
      const centerWord = words[centerIndex];
      const centerWordWidth = centerWord.getBoundingClientRect().width;
      const listWidth = wordList.getBoundingClientRect().width;
      const percentageWidth = (centerWordWidth / listWidth) * 100;
      gsap.to(edgeElement, {
        width: `${percentageWidth}%`,
        duration: 0.5,
        ease: "Expo.easeOut",
      });
    }

    function moveWords() {
      currentIndex++;
      gsap.to(wordList, {
        yPercent: -wordHeight * currentIndex,
        duration: 1.2,
        ease: "elastic.out(1, 0.85)",
        onStart: updateEdgeWidth,
        onComplete: function () {
          if (currentIndex >= totalWords - 3) {
            wordList.appendChild(wordList.children[0]);
            currentIndex--;
            gsap.set(wordList, { yPercent: -wordHeight * currentIndex });
            words.push(words.shift());
          }
        },
      });
    }

    updateEdgeWidth();
    const timeline = gsap.timeline({ repeat: -1, delay: 1 });
    timeline.call(moveWords).to({}, { duration: 2 }).repeat(-1);

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="cloneable">
      <div className="looping-words">
        <div className="looping-words__containers">
          <ul ref={wordListRef} data-looping-words-list="" className="looping-words__list">
            <li className="looping-words__list">
              <p className="looping-words__p">You</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Are</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">The</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Most</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Precious</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Girl</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Princess</p>
            </li>
          </ul>
        </div>
        <div className="looping-words__fade"></div>
        <div
          ref={edgeElementRef}
          data-looping-words-selector=""
          className="looping-words__selector"
        >
          <div className="looping-words__edge"></div>
          <div className="looping-words__edge is--2"></div>
          <div className="looping-words__edge is--3"></div>
          <div className="looping-words__edge is--4"></div>
        </div>
      </div>
    </section>
  );
};

export default WordsLoop;
