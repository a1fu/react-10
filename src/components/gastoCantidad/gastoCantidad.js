import React from 'react'

class GastoCantidad extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="c-gasto-cantidad card">
                    <h2 className="c-gasto-cantidad__titulo">Cantidad</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="presupuesto">Presupuesto</label>
                            <input type="number" className="form-control" id="presupuesto" placeholder="Cantidad en $"/>
                        </div>
                        <button onClick={this.props.handleClickPresupuesto} type="button" className="btn btn-outline-primary">Agregar</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default GastoCantidad