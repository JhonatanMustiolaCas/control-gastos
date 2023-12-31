import { useEffect, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto, }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1500)
    }, [gastos]);

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    };

    const parallax = useParallax({
        speed: -10,
    });

    const handleResetApp = () => {
        const resultado = confirm("¿Deseas reiniciar presupuesto y gastos?");
        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
    };

    return (
        <div className="contenedor contenedor-presupuesto sombra sombra-blanco dos-columnas" ref={parallax.ref}>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? "#DC2626" : "#2e055a",
                        trailColor: "#F5F5F5",
                        textColor: porcentaje > 100 ? "#DC2626" : "#2e055a",
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                    background={true}
                />
            </div>
            <div className="contenido-presupuesto">
                <button className=" reset-app" type="button" onClick={handleResetApp}>
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? "negativo" : ""}`}>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto