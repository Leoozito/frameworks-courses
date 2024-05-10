import './DropdownList.css'

export default function DropdownList(props) {
    return (
        <>
            <div className='dropdown-list'>
                <label>{props.label}</label>
                <select
                    onChange={(e) => props.onAlterado(e.target.value)}
                    value={props.valor}
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