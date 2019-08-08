import React from 'react'

class GastoPresupuesto extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="o-gasto-presupuesto">
                    <div className="alert alert-primary mb-1" role="alert">Presupuesto: ${this.props.presupuesto}</div>
                    <div ref={this.props.restanteId} className="alert alert-success" role="alert">Restantes: ${this.props.restante}</div>
                </div>
            </React.Fragment>
        )
    }
}

export default GastoPresupuesto