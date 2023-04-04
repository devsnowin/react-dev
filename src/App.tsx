import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import About from './pages/about';
import Home from './pages/home';
import NotFound from './pages/notfound';
import PaginationPage from './pages/pagination';

interface PageType {
  id: string;
  name: string;
  href: string;
  element: JSX.Element;
}

const IndexPage = ({ pages }: { pages: PageType[] }) => {
  return (
    <main className="center flex-col gap-6">
      <h1 className="head">Index Page</h1>
      {pages.map((page: PageType) => (
        <Link
          to={page.href}
          key={page.id}
          className="py-4 w-full max-w-xs border-[#414141] border-4 text-xl text-center font-mono rounded-xl"
        >
          {page.name}
        </Link>
      ))}
    </main>
  );
};

function App() {
  const pages: PageType[] = [
    {
      id: '162125f4-72ba-4c92-8e6d-2c3493c81e23',
      name: 'home',
      href: '/home',
      element: <Home />,
    },
    {
      id: '649a306c-467e-43fd-a5e3-9685b1147ab7',
      name: 'about',
      href: '/about',
      element: <About />,
    },
    {
      id: '1b5cd343-84ff-4509-a6eb-5b8ecc67a9b0',
      name: 'pagination',
      href: '/pagination',
      element: <PaginationPage />,
    },
    {
      id: 'afec5b86-203c-4c52-bb41-aa2acde3ab61',
      name: 'not-found',
      href: '*',
      element: <NotFound />,
    },
  ];

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<IndexPage pages={pages} />} />
          {pages.map((page: PageType) => (
            <Route key={page.id} path={page.href} element={page.element} />
          ))}
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
