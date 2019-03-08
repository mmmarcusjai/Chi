const Herovideo = () => (
    <div className="hero-video">
        <video autoPlay muted loop id="my-video">
            <source src="/static/chi_hero_video.mp4" type="video/mp4"></source>
        </video>
        <style jsx>{`
            .hero-video #my-video {
                width: 100%;
                height: 100vh;
                object-fit: fill;
                z-index: -1;
            }
        `}</style>
    </div>
)

export default Herovideo