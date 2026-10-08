# Simulador de arranque de motores industriales

Este proyecto es un simulador web para entender arranques de motores eléctricos industriales, con apoyo para:

- Arranque directo (DOL)
- Arranque suave (Soft Starter)
- Arranque en marcha y paro
- Protección por sobrecorriente
- Protección térmica
- Pérdida de fase
- Cambio de giro (sentido de giro)

La aplicación puede abrirse directamente en el navegador sin instalar dependencias.

## Cómo usarlo

1. Abre `index.html` en tu navegador.
2. Ajusta la configuración del motor.
3. Elige el tipo de arranque.
4. Pulsa `Start` para arrancar.
5. Observa la corriente, velocidad, temperatura y estado de los contactores.

## Estructura

- `index.html` — interfaz principal
- `styles.css` — estilos visuales
- `app.js` — lógica de simulación

## Funcionalidades principales

- Simulación de un motor trifásico industrial
- Visualización del cuadro de maniobra
- Contactores de línea y de giro
- Estado de protección activa o trip
- Rampa de aceleración con soft starter
- Estado de circulación del sistema

## Objetivo

Este simulador está pensado para aprender de forma intuitiva cómo se comportan los motores industriales y cuáles son los criterios de arranque, paro y protección.
