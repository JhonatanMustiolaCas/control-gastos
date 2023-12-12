import ControlPresupuesto from "./ControlPresupuesto"
import Divisor from "./Divisor"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({
    presupuesto,
    setPresupuesto,
    IsValidPresupuesto,
    setIsValidPresupuesto,
    gastos,
    setGastos }) => {

    return (

        <>
            <header>
                <h1>Planificador de Gastos</h1>
                {IsValidPresupuesto ? (
                    <ControlPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        gastos={gastos}
                        setGastos={setGastos}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                ) : (
                    <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )}

            </header>
            <Divisor />
        </>
    )
}

export default Header