import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import Navbar from "./Navbar";


function RecipeDetails(){
    const {id} = useParams()
    // const myKey = import.meta.env.VITE_API_KEY
    const myKey = import.meta.env.VITE_ALTERNATIVE_API_KEY

    const [details, setDetails] = useState()
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${myKey}`)
        .then(res => {
            console.log(res.data)
            setDetails(res.data)
            setIsPending(false)
        })
        .catch(err => {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        })
    }, [])

    return(
        <>
            <Navbar />
            { isPending && <div>Loading...</div> }
            { !isPending && error && <div>{error}</div> }
            { !isPending && !error && details &&
                <>
                <div className="flex flex-col items-center mt-2">
                    <h2 className="sm:text-2xl text-xl uppercase font-bold text-white text-center">{details.title}</h2>
                    <div className="flex flex-col items-start mt-3 bg-white rounded-lg p-2 text-green-600">
                        <div className="flex flex-row items-center"><p className="mr-3">Vegan: </p><FaCheck></FaCheck></div>
                        <div className="flex flex-row items-center"><RxLapTimer className="mr-3"></RxLapTimer><p>Ready in {details.readyInMinutes} minutes</p></div>
                    </div>
                </div>

                <div className="sm:grid lg:grid-cols-6 sm:max-lg:grid-cols-2 flex flex-col items-center gap-5 m-5 p-5 rounded-3xl bg-white">
                    {details.extendedIngredients.map((ingredient) => {
                        return(
                            <div className="flex flex-row items-center" key={ingredient.id}>
                                <h3 className="sm:text-lg text-base font-bold uppercase">{ingredient.name}</h3>
                                <img className="img-ingredients" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="ingredient image" />
                            </div>
                        )
                    })}
                </div>
                
                <div className="p-3">
                    <h3 className="text-2xl mb-3 font-semibold text-center self-center text-white">Short Steps</h3>
                    <ol className="text-white ml-3 font-semibold uppercase">
                        {details.analyzedInstructions[0].steps.map((step) =>{
                            return(
                                <li className="mb-2" key={step.number}>
                                    <p className="font-bold text-center sm:text-start underline">{step.number}</p>{step.step}
                                </li>
                            )
                        })}
                    </ol>
                </div>
                <div className="flex flex-col items-center p-3">
                    <p className="text-xl text-center text-white font-bold">Read this recipe on the original website</p>
                    <a href={details.sourceUrl} target="_blank" rel="noopener">
                        <button className="font-bold text-xl my-3 p-3 rounded-xl uppercase text-green-600 hover:text-white hover:bg-black bg-white">{details.sourceName}</button>
                    </a>
                </div>
                </>
            }
        </>
    )
}

export default RecipeDetails;