import './birthdaysItem.css';

function BirthdaysItem() {
    return (
        <div className="bd-container">
            <h1 className="birth-heading">Birthdays</h1>
            <div className="birthdays">
                <div className="birthday">
                    <div 
                        className="birthday-image" 
                        style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zdVPSWoEpxK76y2Vv13PirrzR8Qln_3IrzVE_sfZCxht7vck)` }}
                        aria-label="James McAvoy's photo">
                    </div>
                    <h2 className="birthday-name">James McAvoy</h2>
                    <p className="birth-date">April 21 (45)</p>
                </div>
                <div className="birthday">
                    <div 
                        className="birthday-image" 
                        style={{backgroundImage: `url(https://www.giantfreakinrobot.com/wp-content/uploads/2022/04/jack-nicholson-shining-900x506.jpg)` }}
                        aria-label="Jack Nicholson's photo">
                    </div>
                    <h2 className="birthday-name">Jack Nicholson</h2>
                    <p className="birth-date">April 22 (87)</p>
                </div>
                <div className="birthday">
                    <div 
                        className="birthday-image" 
                        style={{backgroundImage: `url(https://i0.wp.com/www.thewrap.com/wp-content/uploads/2021/05/John-Cena.jpg?fit=990%2C557&ssl=1)` }}
                        aria-label="John Cena's photo">
                    </div>
                    <h2 className="birthday-name">John Cena</h2>
                    <p className="birth-date">April 23 (47)</p>
                </div>
                <div className="birthday">
                    <div 
                        className="birthday-image" 
                        style={{backgroundImage: `url(https://gaffa.blob.core.windows.net/gaffa-media/media/ec45ce5a-85db-494f-b4da-093603b48c39/BarbraStrei-default.webp)` }}
                        aria-label="Barbra Streisand's photo">
                    </div>
                    <h2 className="birthday-name">Barbra Streisand</h2>
                    <p className="birth-date">April 24 (82)</p>
                </div>
                <div className="birthday">
                    <div 
                        className="birthday-image" 
                        style={{backgroundImage: `url(https://media.newyorker.com/photos/5e70fef11785a2000935d0eb/master/pass/ra722.jpg)` }}
                        aria-label="Al Pacino's photo">
                    </div>
                    <h2 className="birthday-name">Al Pacino</h2>
                    <p className="birth-date">April 25 (84)</p>
                </div>
                <div className="birthday">
                    <div 
                        className="birthday-image" 
                        style={{backgroundImage: `url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/14/08/channing-tatum.jpg?width=1200&height=1200&fit=crop)` }}
                        aria-label="Channing Tatum's photo">
                    </div>
                    <h2 className="birthday-name">Channing Tatum</h2>
                    <p className="birth-date">April 26 (44)</p>
                </div>
            </div>
        </div>
    )
}

export default BirthdaysItem