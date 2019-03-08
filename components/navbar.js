const debounce = (func, wait) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, args), wait)
    }
}

class NavMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollPositionY: 0,
        }
    }

componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // I picked this because it's approx 2 frames (ie: 16.7 * 2)
    // return window.addEventListener('scroll', debounce(this.handleScroll, 0))
    return window.addEventListener('scroll', this.handleScroll)
}

componentWillUnmount() {
    // return window.removeEventListener('scroll', debounce(this.handleScroll, 0))
    return window.removeEventListener('scroll', this.handleScroll)
}

handleScroll = () => {
    // + is unary operator, same as Number(scrollPositionY)
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
}

    render() {
        // !! coerces value to be a Boolean
        // we want it to be true or false (true if scrollPositionY > 0)
        // it works because scrollPositionY === 0 is falsy
        const isScrolling = !!this.state.scrollPositionY;
        return (
            <nav className={(isScrolling) ? 'nav isScrolling chi-nav navbar fixed-top' : 'nav chi-nav navbar fixed-top'}>
                <div className="brand-logo navbar-brand text-uppercase"><img src="/static/logo.png"></img></div>
                <style jsx>{`
                    .chi-nav {
                        background-repeat: no-repeat;
                        background-size: 100%;
                        height: 70px;
                        background-position-y: 25%;
                        background-color: #bbbabab8;
                        transform: translateY(-1000px);
                        transition: .5s;
                    }

                    .chi-nav.isScrolling {
                        transform: translateY(0px);
                    }

                    .chi-nav .brand-logo {
                        position: absolute;
                        left: 50%;
                    }

                    .chi-nav .brand-logo img {
                        width: 25%;
                    }
                `}</style>
            </nav>
        )
    }
}
export default NavMenu