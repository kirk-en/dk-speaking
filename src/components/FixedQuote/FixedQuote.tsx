import { useRef } from 'react';
import './FixedQuote.scss';

const FixedQuote = (): JSX.Element => {
  const gradientRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (gradientRef.current) {
      const { left, top } = gradientRef.current.getBoundingClientRect(); // Get element's position
      const x = event.clientX - left; // Adjust X position relative to the element
      const y = event.clientY - top; // Adjust Y position relative to the element

      gradientRef.current.style.setProperty('--x', `${x}px`);
      gradientRef.current.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <article className="quote" onMouseMove={handleMouseMove} ref={gradientRef}>
      <div className="quote__text">
        <h2>Project Your Presence</h2>
        <h3>
          "Your voice is your greatest tool for influence—when you speak with
          authenticity and purpose, you don't just tell a story, you create an
          impact that lasts."
        </h3>
        <p>— Dennis Kenney</p>
      </div>
    </article>
  );
};

export default FixedQuote;
