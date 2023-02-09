import React, { useState } from 'react';

const Calendrier = () => {
                      {/* Code à remplacer dynamiquement*/}
  const [dateSélectionnée, définirDateSélectionnée] = useState(new Date());
  const rendreSemaines = () => {
    const premierJourDuMois = new Date(dateSélectionnée.getFullYear(), dateSélectionnée.getMonth(), 1);
    const dernierJourDuMois = new Date(dateSélectionnée.getFullYear(), dateSélectionnée.getMonth() + 1, 0);
    const semaines = [];
    let semaineActuelle = [];
    let jourActuel = premierJourDuMois;

    while (jourActuel <= dernierJourDuMois) {
      if (jourActuel.getDay() === 0) {
        semaines.push(semaineActuelle);
        semaineActuelle = [];
      }

      semaineActuelle.push(jourActuel);
      jourActuel = new Date(jourActuel.getTime() + 86400000);
    }

    semaines.push(semaineActuelle);

    return semaines.map((semaine, index) => (
      <tr key={index}>
        {semaine.map((jour, jourIndex) => (
          <td key={jourIndex}>
            <button onClick={() => définirDateSélectionnée(jour)} style={{ backgroundColor: jour === dateSélectionnée ? "lightblue" : "transparent" }}>
            {jour.getDate()}
            </button>
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Dim</th>
          <th>Lun</th>
          <th>Mar</th>
          <th>Mer</th>
          <th>Jeu</th>
          <th>Ven</th>
          <th>Sam</th>
        </tr>
      </thead>
      <tbody>
        {rendreSemaines()}
      </tbody>
    </table>
  );
};

export default Calendrier;
