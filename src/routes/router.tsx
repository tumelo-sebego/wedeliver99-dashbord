import { Suspense, lazy } from 'react';
import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';

import paths, { rootPaths } from './paths';

import PageLoader from '../components/loading/PageLoader';
import Splash from 'components/loading/Splash';

const App = lazy(() => import('App'));
const MainLayout = lazy(async () => {
  return Promise.all([
    import('layouts/main-layout'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});
const AuthLayout = lazy(async () => {
  return Promise.all([
    import('layouts/auth-layout'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports);
});

const Error404 = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return import('pages/errors/Error404');
});

const Sales = lazy(async () => {
  return Promise.all([
    import('pages/home/Sales'),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});

// const ProductDetailsPage = lazy(async () => import('pages/products/[id]'));

const Products = lazy(async () => import('pages/products'));
const Orders = lazy(async () => import('pages/orders'));
const Customers = lazy(async () => import('pages/customers'));
const Drivers = lazy(async () => import('pages/drivers'));

const Login = lazy(async () => import('pages/authentication/Login'));
const SignUp = lazy(async () => import('pages/authentication/SignUp'));

const ResetPassword = lazy(async () => import('pages/authentication/ResetPassword'));
const ForgotPassword = lazy(async () => import('pages/authentication/ForgotPassword'));

const routes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/', // Changed to root path
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Login />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: '/sales',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Sales />
            </Suspense>
          </MainLayout>
        ),
      },
      {
        path: '/products',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Products />
            </Suspense>
          </MainLayout>
        ),
      },
      {
        path: '/orders',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Orders />
            </Suspense>
          </MainLayout>
        ),
      },
      {
        path: '/customers',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Customers />
            </Suspense>
          </MainLayout>
        ),
      },
      {
        path: '/drivers',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Drivers />
            </Suspense>
          </MainLayout>
        ),
      },
      // {
      //   path: '/products?=id',
      //   element: (
      //     <MainLayout>
      //       <Suspense fallback={<PageLoader />}>
      //         <ProductDetailsPage />
      //       </Suspense>
      //     </MainLayout>
      //   ),
      // },
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          {
            path: paths.login,
            element: <Login />,
          },
          {
            path: paths.signup,
            element: <SignUp />,
          },
          {
            path: paths.resetPassword,
            element: <ResetPassword />,
          },
          {
            path: paths.forgotPassword,
            element: <ForgotPassword />,
          },
        ],
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
