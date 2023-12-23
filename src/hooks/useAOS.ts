import AOS from "aos";

export const useAOS = () => {
    AOS.init({
        once: true
    })
}