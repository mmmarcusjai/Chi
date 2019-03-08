function PositionControl(props) {
    let discOrder = (props.prodData.position == 'left') ? null : 'left test';
    return (
        <div className="product">
            <div className="container-fluid">
                <div className="content row">
                    <div className="col-md-6"><img src={`/static/` + props.prodData.img} /></div>
                    <div className={`discription col-md-6 ${discOrder}`}>
                        <h1>{props.prodData.title}</h1>
                        <div>{props.prodData.disc}</div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .product {
                    padding-top: 10%;
                }

                .product img {
                    width: 20%;
                }

                .product .content {
                    text-align: center;
                }

                .product .discription {
                    margin-top: 3rem;
                }

                .product .discription.left {
                    order: -1;
                }

                @media(max-width: 768px) {
                    .product .discription.left {
                        order: 1;
                    }
                }
            `}</style>
        </div>
    );
}

class Product extends React.Component {
    render() {
        const product = {
            img: this.props.imgName,
            title: this.props.prodTitle,
            disc: this.props.prodDisc,
            position: this.props.style
        }
        return(
            <PositionControl prodData={product}/>
        );
    }
}

export default Product