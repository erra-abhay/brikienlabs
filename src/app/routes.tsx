import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage.tsx';
import { TeamPage } from '../pages/TeamPage.tsx';
import { ContactPage } from '../pages/ContactPage.tsx';
import { NotFoundPage } from '../pages/NotFoundPage.tsx';
import { BlogsPage } from '../pages/BlogsPage.tsx';
import { BeaconTrackPage } from '../pages/blogs/BeaconTrackPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'blogs', element: <BlogsPage /> },
      { path: 'blogs/beacontrack', element: <BeaconTrackPage /> },
    ],
  },
]);

