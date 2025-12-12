import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function useLazyLoadWithSkeleton(delay = 1500, threshold = 0.1) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return [ref, loaded ] as const;
}
