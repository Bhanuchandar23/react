
function List(){
    const items = ["shope","bus","red","green"];

    return (
        <div>
            <h1>List</h1>
            <ul>
               {items.map(item =><li>{item}</li>)}
            </ul>
            <div>
               <h1>List</h1>
                <ul>
                    {items.map(item =><li>{item}</li>)}
                </ul>
            </div>
            <div class="list-group">
                <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                    The current link item
                </a>
                <a href="#agt" className="list-group-item list-group-item-action  active">A second link item</a>
                <a href="#" className="list-group-item list-group-item-action">A third link item</a>
               <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
               <a className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
            </div>
            <div  id ="agt"className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>
        </div>
        
         
           

     
    
    );
}
export default List;