
export const useIntersectionObserver = ( refElement: HTMLElement | null , callback: () => void) => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) 
          callback();
      });
    },
    { rootMargin: "-150px"}
    );

    if (refElement)
         observer.observe(refElement);


    return () => {
        observer.disconnect();
    };

};
