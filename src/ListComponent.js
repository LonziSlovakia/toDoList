

const List = (props) => {
    const { color, tasks } = props;
    console.log(tasks);

    return (
        <>
            <ul>
                {tasks.map((task) =>
                    <li> {task} </li>
                )}
            </ul>
        </>
    )
}


export default List