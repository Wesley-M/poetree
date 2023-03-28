import {
    createBrowserRouter,
} from "react-router-dom";
import { Poem } from "./Poem";
import { Root } from "./Root";
import { ExplorePoems } from "./ExplorePoems";
import { LuckyPoemRedirect } from "./LuckyPoemRedirect";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "poems/lucky",
                element: <LuckyPoemRedirect/>,
            },
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