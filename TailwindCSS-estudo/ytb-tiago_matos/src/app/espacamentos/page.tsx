export default function Espacamentos() {
    return (
        <>
        <div className="p-4">
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
            <h1 className="text-2xl m-4">Paddings: p, px, py, pl, pr</h1>
            <h1 className="text-2xl m-4">Margins: m, mx, my, ml, mr</h1>
        </div>
        <div className="justify-center flex space-y-3">
            <h1 className="text-2xl font-bold">Exemplo do "Space"</h1>
        </div>
        <div className="justify-center flex space-x-6 p-3">
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </div>
        </>
    )
}