import { useEffect, useRef } from 'react';

// IntersectionObserver against the top-level viewport. In a Tableau dashboard the
// extension iframe is usually as tall as the whole viz and the *dashboard* scrolls,
// so window scroll events never fire inside the iframe — but IntersectionObserver
// still reports what is actually on screen. Used to pause offscreen animation.
export function useInView(ref, threshold = 0.01) {
  const inView = useRef(true);
  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) inView.current = e.isIntersecting;
      },
      { threshold },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ref, threshold]);
  return inView;
}
