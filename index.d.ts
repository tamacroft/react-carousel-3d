declare module '3d-react-carousal' {
    interface ICarousel {
        slides: JSX.Element[];
        autoplay?: boolean;
        interval?: number;
        onSlideChange?: (slide: number) => void;
        arrows?: boolean;
    }

    export const Carousel: React.FC<ICarousel>;    
}