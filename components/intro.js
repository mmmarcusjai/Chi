const Intro = () => (
    <section className="intro">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="title"><img src="/static/rationale_title.png"></img></div>
                    <div className="content"><i>We want to create a disruptive nutrious brand to enhance the travel ex- pierence in airplanes. For this we will develop a series of (food) products categorised by the health benefits they offer. We tap into ancient wisdom and work with a team of the best nutrition experts.</i></div>
                </div>
            </div>
            <div className="row btn-list">
                <div className="col-md-3 btn">
                    <img src="/static/drink_btn.png"></img>
                </div>
                <div className="col-md-3 btn">
                    <img src="/static/snacks_btn.png"></img>
                </div>
                <div className="col-md-3 btn">
                    <img src="/static/exp_btn.png"></img>
                </div>
                <div className="col-md-3 btn">
                    <img src="/static/products_btn.png"></img>
                </div>
            </div>
        </div>
        <style jsx>{`
            .intro {
                height: 100%;
                margin-top: 10rem;
                min-height: 100vh;
            }

            .intro .title {
                text-align: center;
                margin: 2rem;
            }

            .intro .title img {
                width: 15%;
            }

            .intro .content {
                font-size: 2.5vw;
                width: 80%;
                margin: auto;
                text-align: center;
            }

            .intro .btn-list {
                margin: 6rem auto;
                width: 80%;
            }

            .intro .btn {
                text-align: center;
            }

            .intro .btn img{
                width: 80%;
            }
        `}</style>
    </section>
)

export default Intro