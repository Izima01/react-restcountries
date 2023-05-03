import './LoadingCard.css'

const LoadingCard = () => {
    return (
        <div className="rounded-md bg-gray-100 card animate-pulse loading-card">
            <div className="loading-gradient"></div>
            <div className="card-body">
                <div className="nameload"></div>
                <div className="line w-66"></div>
                <div className="line w-75"></div>
            </div>
        </div>

    )
}

export default LoadingCard