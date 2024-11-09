import { Carousel } from "./components/Carousel";
import { ExloreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <ExloreTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </>
    );
}