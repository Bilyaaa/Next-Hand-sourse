
function Burger () {
    function Menu (e) {
        e.target.style.display = 'none'
    }
    return (
        <div 
        className='burger'
        onClick={Menu}
        >111</div>
    )
}

export  { Burger }