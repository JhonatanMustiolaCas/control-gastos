import PropTypes from "prop-types";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../utils";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
import { Parallax, useParallax } from "react-scroll-parallax";

const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    ocio: IconoOcio,
    suscripciones: IconoSuscripciones,
    salud: IconoSalud,
    casa: IconoCasa,
    gastos: IconoGastos
};

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => eliminarGasto(gasto.id)}
                destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <Parallax scale={[1, 0.85, "easeInOutQuad"]}>
            <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions()}
                    trailingActions={trailingActions()}
                >
                    <div className=" gasto sombra">
                        <div className=" contenido-gasto">
                            <img
                                src={diccionarioIconos[gasto.categoria]}
                                alt="Icono Gasto"
                            />
                            <div className=" descripcion-gasto">
                                <p className=" categoria">{gasto.categoria}</p>
                                <p className=" nombre-gasto">{gasto.nombre}</p>
                                <p className=" fecha-gasto">
                                    Agregado el: {""}
                                    <span>{formatearFecha(gasto.fecha)}</span>
                                </p>
                            </div>
                        </div>
                        <p className=" cantidad-gasto">${gasto.cantidad}</p>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </Parallax>
    )
}

// Gasto.PropTypes = {
//     gasto: PropTypes.object.isRequired,
//     setGastoEditar: PropTypes.func.isRequired
// }

export default Gasto