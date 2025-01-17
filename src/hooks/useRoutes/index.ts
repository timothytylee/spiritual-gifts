import { lazy, LazyExoticComponent } from "react";

interface Route {
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
}

const Results = lazy(() => import("pages/Results"));
const Homepage = lazy(() => import("pages/Homepage"));
const QuestionSection = lazy(() => import("pages/QuestionSection"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const Brochures = lazy(() => import("pages/Brochures"));
const Songs = lazy(() => import("pages/Songs"));
const Teams = lazy(() => import("pages/Teams"));
const Maps = lazy(() => import("pages/Maps"));
const Timetable = lazy(() => import("pages/Timetable"));
const Events = lazy(() => import("pages/Events"));

const useRoutes = (): Route[] => [
  { path: "/", Component: Dashboard },
  { path: "/brochures", Component: Brochures },
  { path: "/songs", Component: Songs },
  { path: "/teams", Component: Teams },
  { path: "/maps", Component: Maps },
  { path: "/events", Component: Events },
  { path: "/timetable", Component: Timetable },
  { path: "/test", Component: Homepage },
  { path: "/result/:compressedResults", Component: Results },
  { path: "/question-set/:questionSetNumber", Component: QuestionSection },
];

export default useRoutes;
