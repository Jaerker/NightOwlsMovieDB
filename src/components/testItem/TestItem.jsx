import './testItem.css';

function TestItem() {
    return (
        <div className="tests">
            <div
                className="test"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://preview.redd.it/fallout-2024-textless-official-posters-for-amazon-prime-v0-sf75nyvjzxmc1.jpg?width=864&format=pjpg&auto=webp&s=02cf184b72f1a009c1545132f62b12bd4d10e17d)` }}
                aria-label="Fallout series poster">
                <h2 className="test-heading">Test yourself</h2>
                <p className="test-text">Which character are you from Fallout?</p>
            </div>
            <div
                className="test"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.wsj.net/im-933209/?width=1278&size=1)` }}
                aria-label="Picture fron Shogun series">
                <h2 className="test-heading">Test yourself</h2>
                <p className="test-text">Which haircut from Shogun would you have?</p>
            </div>
            <div
                className="test"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://awakening-cdn.dunegames.com/splash-page/dune-awakening.jpg?v=20221117092845)` }}
                aria-label="Monster from Dune">
                <h2 className="test-heading">Test yourself</h2>
                <p className="test-text">Would you survive in Dune’s universe?</p>
            </div>
            <div
                className="test"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://upload.wikimedia.org/wikipedia/en/1/1b/Joker%27s_Evolution.jpg)` }}
                aria-label="Picture with different Jokers from movies, series and cartoons">
                <h2 className="test-heading">Test yourself</h2>
                <p className="test-text">Which Joker are you?</p>
            </div>
        </div>
    )
}

export default TestItem