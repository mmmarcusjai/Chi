import Header from '../components/header';
import Navbar from '../components/navbar';
import Video from '../components/herovideo';
import Intro from '../components/intro';
import Products from '../components/products';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Index = () => (
    <div className="chi-body">
        <Header />
        <Navbar />
        <Video />
        <Intro />
        <Products />
        <style jsx>{`
            .chi-body {
                background: url('../../static/chi_pattern.png');
                background-size: contain;
            }

        `}</style>
    </div>
)

export default Index