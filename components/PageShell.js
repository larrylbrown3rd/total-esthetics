import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function PageShell({ children, flush = false }) {
  return (
    <>
      <Navbar />
      <main className={flush ? '' : 'pt-[100px]'}>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
