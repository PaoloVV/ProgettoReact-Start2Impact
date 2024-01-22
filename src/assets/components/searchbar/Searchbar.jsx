import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select"
import { changeCalories } from "../../../redux/maxCaloriesSlice";
import { changeMaxTime } from "../../../redux/timePreparationSlice";
import { checkVegan, deCheckVegan } from "../../../redux/veganSlice";
import { changeQuery } from "../../../redux/querySlice";
import { resetOffset } from "../../../redux/offsetSlice";

function Searchbar({fetchRecipes}){
    const maxCalories = useSelector((state) => state.calories.maxCalories)
    // const maxTime = useSelector((state) => state.time.maxTime)
    // const vegan = useSelector((state)=> state.vegan.vegan)
    const query = useSelector((state) => state.query.query)
    const dispatch = useDispatch()

    const timeOptions = [
        {value: "10000", label: "No time limit"},
        {value: "15", label: "15 Minutes"},
        {value: "30", label: "Half Hour"},
        {value: "45", label: "45 Minutes"},
        {value: "60", label: "1 Hour"}
    ]

    function handleChange(e){
        // console.log(e.target.value)
        dispatch(changeQuery(e.target.value))
    }
    function handleChangeTime(selectedOption){
        // console.log(selectedOption.value)
        dispatch(changeMaxTime(selectedOption.value))

    }
    function handleChangeCal(e){
        // console.log(e.target.value)
        e.preventDefault()
        dispatch(changeCalories(e.target.value))
    }

    function handleVegan(e){
        if(e.target.checked){
            dispatch(checkVegan())
        }
        else{
            dispatch(deCheckVegan())
        }
    }

    function searchRecipes(e){
        // console.log(query, maxCalories, maxTime, vegan)
        e.preventDefault();
        dispatch(resetOffset())
        setTimeout(fetchRecipes, 1000);
    }


    return(
        <>
        {/* <div> */}
            <input onChange={handleChange} value={query} type="text" placeholder="Search your recipe..." className="px-3 sm:min-w-96 w-4/5 h-10 rounded-md mt-3"></input>
        {/* </div> */}

        <div className="sm:grid grid-cols-3 mt-5 gap-5 flex flex-col justify-evenly items-start">
            <div className="flex flex-col sm:items-center items-start text-white">
                <label htmlFor="calories">Calories:</label>
                <input onChange={handleChangeCal} value={maxCalories} className="w-24 h-10 rounded-lg font-semibold bg-white text-black pl-3" id="calories" type="number" placeholder="Max"/>
            </div>

            <div className="flex flex-col sm:items-center items-start">
                <p className="text-white">Maximum Time preparation</p>
                <Select
                    className="w-60 font-semibold"
                    options={timeOptions}
                    onChange={handleChangeTime}
                    value={timeOptions.label}
                />
            </div>
            <div className="flex flex-col justify-evenly sm:items-center items-start text-white">
                <label htmlFor="vegan-check"> Vegan Recipes</label>
                <input onChange={handleVegan} className="w-6 h-6 accent-black" type="checkbox" id="vegan-check" />
            </div>
        </div>
        <button onClick={searchRecipes} className="border-2 mt-3 w-48 h-10 bg-green-600 hover:bg-black hover:shadow-md hover:shadow-white text-white rounded-lg">SEARCH</button>


        </>
    )
}

export default Searchbar;