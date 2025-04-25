import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
    const {
        className,
        loading = "lazy",
    } = props

    const title = "Home"

    return (
        <a
            className={classNames(className, "logo")}
            href="/"
            title={title}
            aria-label={title}
        >
            <img
                className="logo__image"
                src="/Logo.svg"
                alt=""
                width="200"
                height="60"
                loading={loading}
            />
        </a>
    )
}

export default Logo