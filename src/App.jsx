import React from 'react';
import { createHashRouter, RouterProvider, Outlet, useRouteError } from 'react-router-dom';
import './App.css';
import './index.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Jobs from './pages/jobs/Jobs';
import PostJob from './pages/jobs/postjob/PostJob';
import JobDetails from './pages/jobs/JobDetails';
import News from './pages/news/News';
import NewsDetails from './pages/news/NewsDetails';
import PortFolios from './pages/portfolios/PortFolios';
import PortFolioDetails from './pages/portfolios/PortFolioDetails';
import CreatePortFolio from './pages/portfolios/CreatePortFolio';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';
import AdminDashboard from './pages/protected/admin/AdminDashboard';
import AdminLayout from './pages/protected/admin/AdminLayout';
import PostsManagement from './pages/protected/admin/PostsManagement';
import UserManagement from './pages/protected/admin/UserManagement';
import ProjectDoc from './pages/protected/admin/doc/ProjectDoc';
import SavedJobs from './pages/protected/users/SavedJobs';
import UserDashboard from './pages/protected/users/UserDashboard';
import UserProfile from './pages/protected/users/UserProfile';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Apply from './pages/jobs/Apply';

const Layout = () => (
  <div className="page-wrapper">
    <Navbar />
    <main className="content">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const RouteErrorBoundary = () => {
  const error = useRouteError();
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error?.message || 'An unexpected error occurred.'}</p>
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "jobs",
        children: [
          { index: true, element: <Jobs /> },
          { path: ":id", element: <JobDetails /> },
          { path: ":id/apply", element: <Apply /> }
        ]
      },
      { path: "postJob", element: <PostJob /> },
      {
        path: "portfolios",
        children: [
          { index: true, element: <PortFolios /> },
          { path: ":id", element: <PortFolioDetails /> }
        ]
      },
      { path: "create", element: <CreatePortFolio /> },
      {
        path: "news",
        children: [
          { index: true, element: <News /> },
          { path: ":id", element: <NewsDetails /> }
        ]
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "search-results", element: <SearchResults /> },
      { path: "search", element: <SearchForm /> },
      {
        path: "admin",
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "posts-management", element: <PostsManagement /> },
          { path: "user-mangement", element: <UserManagement /> },
          { path: "layout", element: <AdminLayout /> },
          { path: "documentation", element: <ProjectDoc /> }
        ]
      },
      {
        path: "user",
        children: [
          { index: true, element: <UserDashboard /> },
          { path: "SavedJobs", element: <SavedJobs /> },
          { path: "profile", element: <UserProfile /> }
        ]
      }
    ]
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> }
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
