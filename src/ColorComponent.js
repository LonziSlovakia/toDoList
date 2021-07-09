import { Dropdown } from 'react-bootstrap'

const ColorItem = (props) => {
    const { color, id, onClick } = props;

    return (
        <Dropdown.Item href={`#/action-${id}`} >
            <div onClick={() => onClick(color)} className={` inline-block ml-3 pb-2 px-2 h-8 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>
                {color}
            </div>
        </Dropdown.Item>
    )
}

export default ColorItem;