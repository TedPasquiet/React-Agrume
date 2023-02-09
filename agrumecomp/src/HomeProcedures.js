import React from 'react'
import { BsFillFileEarmarkSpreadsheetFill} from "react-icons/bs";

export default function HomeProcedures() {
  return (
    <div className='homeProcedures'>
        <div className='homeProcedures_title'>
        <span className='homeProcedures_title_icon'><BsFillFileEarmarkSpreadsheetFill/></span>
        <h2 className='homeProcedures_title_text'>Procédures en cours</h2>
        </div>
        <div className='homeProcedures_encours_div'>
            <div className='homeProcedures_encours'>
                                    {/* Code à remplacer dynamiquement*/}
                <div className='homeProcedures_encours_unique'>
                    <h3 className='homeProcedures_encours_unique_nom' >Nom Procédure</h3>
                    <p className='homeProcedures_encours_unique_date'>Date de début</p>
                    <p className='homeProcedures_encours_unique_employeur'>Employeur</p>
                    <br/>
                    <p className='homeProcedures_encours_unique_salarie'>Salarié</p>
                </div>
            </div>
            <div className='homeProcedures_encours'>
                <div className='homeProcedures_encours_unique'>
                    <h3 className='homeProcedures_encours_unique_nom' >Nom Procédure</h3>
                    <p className='homeProcedures_encours_unique_date'>Date de début</p>
                    <p className='homeProcedures_encours_unique_employeur'>Employeur</p>
                    <br/>
                    <p className='homeProcedures_encours_unique_salarie'>Salarié</p>
                </div>
            </div>
            <div className='homeProcedures_encours'>
                <div className='homeProcedures_encours_unique'>
                    <h3 className='homeProcedures_encours_unique_nom' >Nom Procédure</h3>
                    <p className='homeProcedures_encours_unique_date'>Date de début</p>
                    <p className='homeProcedures_encours_unique_employeur'>Employeur</p>
                    <br/>
                    <p className='homeProcedures_encours_unique_salarie'>Salarié</p>
                </div>
            </div>
        </div>
    </div>
  )
}
