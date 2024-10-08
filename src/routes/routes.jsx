import { createBrowserRouter } from "react-router-dom";

//Pages
import { Home } from "../pages/Home";
import { App } from "../App";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (<Home />)
            }
        ]
    }
]);
