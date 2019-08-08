import React from 'react'

class GastoFormulario extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="o-gasto-formulario">
                    <h2 className="c-gasto-formulario__titulo">Añade tus gastos aqui</h2>
                    <form ref={this.props.formGastos}>
                        <div className="form-group">
                            <label htmlFor="gasto">Gastos</label>
                            <input type="text" className="form-control" id="gasto" placeholder="Nombre del gasto"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cantidad">Cantidad</label>
                            <input type="number" className="form-control" id="cantidad" placeholder="Cantidad en $"/>
                        </div>
                        <div ref={this.props.formValid} className="invalid-feedback mb-3">Por favor rellena todos los campos.</div>
                        <button onClick={this.props.handleClickGastos} type="button" className="btn btn-outline-primary">Agregar</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default GastoFormulario