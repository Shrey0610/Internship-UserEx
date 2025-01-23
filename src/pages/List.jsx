function List(props) {
    const itemlist= props.item;
    const itemcat= props.category;

    itemlist.sort();
    return (
        <> 
        <h3>&nbsp; {itemcat}</h3>   
        <ol>{itemlist.map((list1) => <li key={list1.id}>&nbsp; {list1.id}: {list1.name}: &nbsp; <b>{list1.calories}</b></li>)}
        </ol>
    </>
)
}

export default List
