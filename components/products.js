import Product from './product';
import Slide from 'react-reveal/Slide';

const Products = () => (
    <section className="products">
        <Slide left>
            <Product imgName="product_4.png" prodTitle="TITLE 4" prodDisc="Dummy TEXT" style="left" />
        </Slide>
        <Slide right>
            <Product imgName="product_1.png" prodTitle="TITLE 1" prodDisc="Dummy TEXT" style="right"/>
        </Slide>
        <Slide left>
            <Product imgName="product_2.png" prodTitle="TITLE 2" prodDisc="Dummy TEXT" style="left" />
        </Slide>
        <Slide right>
            <Product imgName="product_3.png" prodTitle="TITLE 3" prodDisc="Dummy TEXT" style="right"/>
        </Slide>
    </section>
)

export default Products