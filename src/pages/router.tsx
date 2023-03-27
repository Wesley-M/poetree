import {
    createBrowserRouter,
} from "react-router-dom";
import { Poem } from "./Poem";
import { Root } from "./Root";
import { ExplorePoems } from "./ExplorePoems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "poems/:poemId",
                element: <Poem />,
            },
            {
                index: true,
                element: <ExplorePoems />,
            }
        ]
    },
]);