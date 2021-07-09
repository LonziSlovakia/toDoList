import { Dropdown } from 'react-bootstrap'

const ColorItem = (props) => {
    const { color, id, onClick } = props;

    return (
        <Dropdown.Item href={`#/action-${id}`} >
            <div onClick={() => onClick(color)} className={`-ml-2 mt-0.5 px-2 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>
                {color}
            </div>
        </Dropdown.Item>
    )
}

export default ColorItem;