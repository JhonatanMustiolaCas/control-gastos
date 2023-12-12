# Control Gastos

## Descripción

Aplicacón para el control de presupuestos personales hecha con **React**. Puedes tener un histórico de tus *gastos*, *insertar*, *eliminar* y *editar* gastos. Con una interfaz simple y confortable, también puedes ver de cuánto dispones según el presupuesto dado y obtener dinámicamente el porcentaje de gastos.

## Requerimientos

+ node >= `18.18.2`
+ npm  >= `10.2.4`

## Instalación

```bash
git clone https://www.github.com/JhonatanMustiolaCas/control-gastos
cd control-gastos
npm install
```

+ El primer comando crea una copia de este repositorio en el [*current working directory*](https://es.wikipedia.org/wiki/Directorio_de_trabajo)
+ Con el segundo comando entras a tu copia del repositorio
+ Con el tercer comando instalas las dependencias del proyecto

Y con eso ya tienes preparado el entorno para correr la aplicación

>[!WARNING]
> Asegúrate de ejecutar los comandos estando en un directorio con perimisos de usuario

## Uso

+ Usa `npm run dev` para correr la aplicación. Luego abre el navegador en la url `localhost:5173` para empezar a usarla
+ Usa `npm run build` para compilar la aplicación, lo cual generará el directorio `dist/` con software listo para producción
+ Usa `npm run preview` para servir la aplicación a través del puerto `4173`. Esto mostrará una previsualización de la app en producción, por lo que antes debes haber compilado con `npm run build`
