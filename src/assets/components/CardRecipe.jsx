
function CardRecipe({ key, title, imgUrl }){
    return(
        <>
            <div className="card-recipe flex flex-col justify-between items-center
                 self-center justify-self-center border-2 border-double border-black rounded-lg h-64 w-64 p-5
                 bg-white">
                <div className="h-1/5">
                    <h2 className="text-green-600 text-lg font-bold text-center">{title}</h2>
                </div>    
                <img src={imgUrl} alt="Recipe image" />
            </div>
        </>
    )
}

export default CardRecipe;