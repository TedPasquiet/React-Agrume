import React from 'react'
import Calendrier from './Calendrier'
export default function Main() {
  return (

        <div className='main'>
            <div className='main_menu'>
                <div className='main_menu_procedure'>
                    {/* Code à remplacer dynamiquement*/}
                    <p className='main_menu_procedure_type'>Type de procédure</p>
                    <p className='main_menu_procedure_employeur'>Employeur</p>
                </div>
                <div className='main_menu_procedure'>
                    <p>Type de procédure</p>
                    <p>Employeur</p>
                </div>
                <div className='main_menu_procedure'>
                    <p>Type de procédure</p>
                    <p>Employeur</p>
                </div>
            </div>
            <div className='main_calendar'>
                <Calendrier/>
            </div>
        </div>
  )
}
