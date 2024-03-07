import './DropdownList.css'

export default function DropdownList(props) {
    return (
        <>
            <div className='dropdown-list'>
                <label>{props.label}</label>
                <select
                    required={props.obrigatorio}
                >
                    {props.items.map(items => 

                        <option key={items}>{items}</option>
                    )}
                </select>
            </div>
        </>
    )
}