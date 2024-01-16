import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { incrementOffset, decrementOffset } from "../../redux/offsetSlice"
import Navbar from "../components/Navbar"
import Searchbar from "../components/SearchBar"
import CardRecipe from "../components/CardRecipe"
import axios from "axios"
import Footer from "../components/Footer"


function AdvancedSearch(){
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const maxCal = useSelector((state) =>state.calories.maxCalories)
    const query = useSelector((state)=> state.query.query)
    const vegan = useSelector((state)=> state.vegan.vegan)
    const maxTime = useSelector((state) => state.time.maxTime)
    const offset = useSelector((state) => state.offset.value)
    const dispatch = useDispatch()

    const [totalResults, setTotalResults] = useState(0)

    const nextPage = () =>{
        dispatch(incrementOffset())
    }

    const prevPage = () =>{
        dispatch(decrementOffset())
    }

    // const myKey = import.meta.env.VITE_API_KEY
    const myKey = import.meta.env.VITE_ALTERNATIVE_API_KEY

    useEffect(() =>{
        fetchRecipes()
        // dispatch(fetchRecipes())
    }, [offset])

    const fetchRecipes = () =>{
        setIsPending(true);
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${myKey}&query=${query}&maxReadyTime=${maxTime}&maxCalories=${maxCal}&vegan=${vegan}&number=${12}&offset=${offset}`)
        .then(res =>{
            console.log(res.data)
            setRecipes(res.data.results)
            setTotalResults(res.data.totalResults)
            setIsPending(false)
        })
        .catch(err =>{
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        })
    }

    return(
        <>
            <Navbar></Navbar>

            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-white text-center">Advanced Search</h2>
                    <Searchbar fetchRecipes={fetchRecipes} />

                </div>

                <div className="sm:w-1/4 w-4/5 text-white flex flex-row sm:justify-evenly justify-between my-5">
                    {offset !== 0 ? <button className="border-2 uppercase bg-black p-3 rounded-xl" onClick={prevPage}>Prev Page</button> : null}
                    {(totalResults-offset) < 12 ? null :<button className="border-2 uppercase bg-black p-3 rounded-xl" onClick={nextPage}>Next Page</button>}
                </div>

                <div>
                    {isPending && <div className="text-white font-bold text-center mt-3">Loading...</div>}
                    {error ? <div>Error: {error.message}</div> : null}
                    {!error && recipes && 
                    <>
                        <p className="text-white text-bold text-center">I've found: {totalResults} results!</p>
                        <div className="sm:grid sm:max-xl:grid-cols-2 xl:grid-cols-4 flex flex-col items-center gap-5 m-3 px-3">
                            {recipes.map((recipe) =>(
                                <Link to={`/advanced/${recipe.id}`} key={recipe.id}>
                                    <CardRecipe 
                                        // key={recipe.id}
                                        title={recipe.title}
                                        imgUrl={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.${recipe.imageType}`}
                                    />
                                </Link>
                            ))}
                        </div>
                    </>}
                    
                </div>
                <div className="sm:w-1/4 w-4/5 text-white flex flex-row sm:justify-evenly justify-between mb-5">
                    {offset !== 0 ? <button className="border-2 uppercase bg-black p-3 rounded-xl" onClick={prevPage}>Prev Page</button> : null}
                    {(totalResults-offset) < 12 ? null :<button className="border-2 uppercase bg-black p-3 rounded-xl" onClick={nextPage}>Next Page</button>}
                </div>

                <Footer></Footer>

            </div>
            
        


        </>
    )
}

export default AdvancedSearch;