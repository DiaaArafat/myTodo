const Search =({onclick})=>{

    return (
        <div className="Search">
        <input className="searchBar" type="Text" placeholder="Search"></input>
        <input  type="checkbox" name="hide" id="toggle" onClick={()=>{onclick()}}></input>
        <label for="toggle"> Hide </label>
        </div>
    )
}
export default Search