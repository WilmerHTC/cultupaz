import Button from './Button'

export default function MainScreen(props) {

    const levelText = ['Facil', 'Dificil'];

    return (
        <div className='mainscreen text-center'>
            <h1 className='mainscreen--title'>Encontrar la Pareja</h1>
            <div className='mainscreen--menu'>
                <ul>Selecciona el nivel</ul>
                <Button label={levelText[props.level]} action={props.changeDifficulty} /><br />
                <Button label="Jugar" action={ () => props.setStart(1) } /><br />
                
            </div>
            
        </div>
    )
}
