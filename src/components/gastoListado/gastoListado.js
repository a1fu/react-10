import React from 'react'

class GastoListado extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="o-gasto-listado">
                    <h2 className="c-gasto-listado__titulo">Listado</h2>
                    <table className="table">
                        <tbody>
                            <tr ref={this.props.tablaVacio}><td className="text-muted text-center">listado vacio</td></tr>
                            {
                                this.props.gastos.map((e, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{e.gasto}<span className="badge badge-pill badge-primary float-right u-lh">${e.cantidad}</span></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default GastoListado