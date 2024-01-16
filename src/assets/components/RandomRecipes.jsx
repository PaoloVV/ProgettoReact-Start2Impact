import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRandom } from "../../redux/randomSlice";
import CardRecipe from "./CardRecipe";
import Navbar from "./Navbar";
import Searchbar from "./SearchBar";
import Footer from "./Footer";

function RandomRecipes(){
    const random = useSelector((state) => state.random)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("dati fetchati")
        dispatch(fetchRandom())
    }, [])
    const refresh = () =>{
        dispatch(fetchRandom())
    }
    
    return(
        <>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="flex flex-col items-center mb-32">
                <h2 className="sm:text-2xl text-xl font-bold text-white my-5">RANDOM RECIPES</h2>
                {/* <Searchbar /> */}
                <button onClick={refresh} className="border-2 mt-3 w-48 h-10 bg-green-600 hover:bg-black hover:shadow-md hover:shadow-white text-white rounded-lg">REFRESH</button>
                <h3 className="text-xl font-bold text-white my-5">Your 6 random recipes!</h3>
                {random.loading && <div>Loading...</div>}
                {!random.loading && random.error ? <div>Error: {random.error}</div> : null}
                {!random.loading && random.randomRecipes ? <div className="grid grid-cols-1 md:max-xl:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:m-3 px-3 gap-10">
                    {random.randomRecipes.map(randomRec => (
                        <Link to={`/advanced/${randomRec.id}`}>
                            <CardRecipe
                                key={randomRec.id}
                                title={randomRec.title}
                                imgUrl={`https://spoonacular.com/recipeImages/${randomRec.id}-240x150.${randomRec.imageType}`}>
                            </CardRecipe>
                        </Link>
                    ))}
                </div> : null}
            </div>

            <Footer></Footer>
        </>
    )
}

export default RandomRecipes;