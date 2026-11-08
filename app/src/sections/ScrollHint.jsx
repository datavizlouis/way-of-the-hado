import React from 'react';

/** The pulsing "Scroll for more" line at the foot of a screen (same style as the intro's). */
export default function ScrollHint({ text = 'Scroll for more' }) {
  return (
    <p className="scroll-hint page-hint" aria-hidden="true">
      {text}
    </p>
  );
}
