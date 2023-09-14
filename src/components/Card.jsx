import PropTypes from 'prop-types';

const Card = ({ name, position, description, image, company, prompt }) => {

    const sum = (a,b) =>{
        return a+b
    }



    return (
        <div className="w-fit border-2 border-slate-900 m-20 flex items-center flex-col justify-center p-5">
            <div>
                <p className="text-2xl ">{description}</p>
            </div>
            <div>
                <div>
                    <img src={image} />
                </div>
                <div className="flex flex-col">
                    <button onClick={prompt}>heyyyyyyyyyyyy</button>
                    <div >
                        {name}
                    </div>
                    <div> {position} @ {company} </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes={
    name: PropTypes.string
}

export default Card;
