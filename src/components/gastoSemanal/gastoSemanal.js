import React from 'react'
import './gastoSemanal.scss'

import GastoFormulario from '../gastoFormulario/gastoFormulaio'
import GastoListado from '../gastoListado/gastoListado'
import GastoPresupuesto from '../gastoPresupuesto/gastoPresupuesto'
import GastoCantidad from '../gastoCantidad/gastoCantidad'

class GastoSemanal extends React.Component {
    constructor(){
        super()
        this.formGastos = React.createRef()
        this.restanteId = React.createRef()
        this.tablaVacio = React.createRef()
        this.formValid = React.createRef()
        this.state = {
            presupuesto: 0,
            gastos: [],
            sumaGasto: 0,
            restante: 0,
        }
    }

    // funciones

    // funcion que agrega el presupuesto
    handleClickPresupuesto = async (e) => {
        let item = parseFloat(e.target.parentElement.querySelector('#presupuesto').value)
        if(item){
            await this.setState({presupuesto: item})
            this.gastosRestantes()
        }
    }

    // click que agrega gastos
    handleClickGastos = async (e) => {
        let item = {
            gasto: e.target.parentElement.querySelector('#gasto').value,
            cantidad: parseFloat(e.target.parentElement.querySelector('#cantidad').value)
        }

        if(item.gasto && item.cantidad){
            await this.agregarGastos(item)
            this.sumaGastos()
            this.gastosRestantes()
            this.tablaVacio.current.style.display = 'none'
        }else{
            this.formValidMensaje()
        }
    }

    // funcion que agrega los gastos
    agregarGastos = (item) => {
        let gastos = this.state.gastos.concat(item)     
        this.setState({gastos: gastos})
        this.formGastos.current.reset()
    }

    // funcion que suma los gastos
    sumaGastos = () => {
        let suma = this.state.gastos.reduce((acc, e) => acc + e.cantidad, 0);
        this.setState({sumaGasto: suma})
    }

    // funcion que calcula el presupuesto restante
    gastosRestantes = () => {
        let restante = this.state.restante
        restante = this.state.presupuesto - this.state.sumaGasto
        this.setState({restante: restante})

        this.porcentajePresupuesto(restante)
    }

    // funcion calcula el 50% y 25% de presupuesto
    porcentajePresupuesto = (restante) =>{
        let porcentaje = (restante*100)/this.state.presupuesto
        let style = this.restanteId.current
        if(porcentaje <= 25){
            style.classList.remove('alert-success')
            style.classList.remove('alert-info')
            style.classList.add('alert-danger')
        }else if(porcentaje <= 50){
            style.classList.remove('alert-danger')
            style.classList.remove('alert-success')
            style.classList.add('alert-info')
        }else{
            style.classList.remove('alert-danger')
            style.classList.remove('alert-info')
            style.classList.add('alert-success')
        }
    }

    // funcion que activa el mensaje del validador
    formValidMensaje = () => {
        this.formValid.current.style.display = 'block'
        setTimeout(() => {
            this.formValid.current.style.display = 'none'
        }, 3000)
    }

    render(){
        return(
            <React.Fragment>
                <section className="o-gasto">
                    <h1 className="o-gasto__titulo">Gasto Semanal</h1>
                    <div className="o-gasto-cantidad">
                        <GastoCantidad
                            handleClickPresupuesto={this.handleClickPresupuesto}
                        />
                    </div>
                    <div className="o-gasto-semanal card">
                        <div className="o-gasto-semanal-block-1">
                            <GastoFormulario
                                formGastos={this.formGastos}
                                formValid={this.formValid}
                                handleClickGastos={this.handleClickGastos}
                            />
                        </div>
                        <div className="o-gasto-semanal-block-2">
                            <GastoListado
                                tablaVacio={this.tablaVacio}
                                gastos={this.state.gastos}
                            />
                            <GastoPresupuesto
                                presupuesto={this.state.presupuesto}
                                restante={this.state.restante}
                                restanteId={this.restanteId}
                            />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default GastoSemanal