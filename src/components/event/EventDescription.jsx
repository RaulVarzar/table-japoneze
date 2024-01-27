export default function EventDescription() {
  const saturday = [
    { ora: '8:30', activitate: 'Briefing & Track walk' },
    { ora: '9:00', activitate: 'Track & Skidpad opening' },
    { ora: '10:00', activitate: 'Spectators gate open' },
    { ora: '13:00', activitate: 'Lunch break, Karting' },
    { ora: '15:00', activitate: 'Track, skidpad, loudest pipes' },
    { ora: '18:00', activitate: 'Track, limbo' },
    { ora: '19:00', activitate: 'Track & skidpad closing' },
    { ora: '19:15', activitate: 'Spectators gate closing' },
  ];

  const sunday = [
    { ora: '9:00', activitate: 'Track & Skidpad opening' },
    { ora: '10:00', activitate: 'Spectators gate opeg' },
    { ora: '13:00', activitate: 'Lunch break, Karting' },
    { ora: '15:00', activitate: 'Track & skidpad closing' },
    { ora: '16:00', activitate: 'Awards ceremony' },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div
        tabIndex={0}
        className="transition duration-300 bg-opacity-50 border border-none collapse collapse-arrow hover:bg-opacity-80 bg-neutral"
      >
        <input type="radio" name="my-accordion-1" />
        <div className="text-xl font-semibold text-center collapse-title">
          REGULAMENT
        </div>
        <div className=" collapse-content">
          <p className="p-1 leading-tight xl:leading-snug md:p-4 xl:p-8">
            Evenimentul SAISHO se intoarce! Spre deosebire de editia de anul
            trecut intitulata SAISHO MEET care a avut loc la ultimul etaj al
            parcarii Veranda Mall suntem mandri sa anuntam ca anul acesta va
            oferim din plin experienta unui eveniment auto de calitate inalta la
            standardele din afara, specific ideologiei Table Japoneze care se
            regaseste si pe blogul nostru. SAISHO FEST a fost gandit din start
            sa ofere o experienta unica si nemaintalnita in Romania atat pentru
            un participant cat si pentru un simplu vizitator. Trackdayul a fost
            structurat astfel incat sa ne bucuram de doua layouturi are
            circuitului Skat Kart situat la 60Km de Brasov, iar pentru prima
            data in Romania, oferim un platou irigat in permanenta ca tu si
            prietenii tai sa puteti sa stoarceti cat mai multe ture din
            cauciucurile voastre si sa oferim o mana de ajutor celor care nu au
            atatia cai putere! Printre concursurile din cadrul evenimentului
            nostru se enumera: BEST CAR OF THE SHOW - bracket style BEST WHEELS
            BEST NISSAN / TOYOTA / HONDA / MAZDA / SUBARU / MITSUBISHI / LEXUS /
            INFINITI (cu conditia sa fie minim 3 masini din marca inscrise) BEST
            DRIFTER BEST DRIFTCAR LOUDEST PIPES LIMBO Taxa vizitator: 30 RON
            bratara access tot weekendul ATENTIE! Costul pachetelor de mai jos
            este doar pentru pachetele de tip Phase 2 cu plata in avans si au
            disponibilitate limitata.
          </p>
          <p className="w-full p-4 text-sm font-thin md:p-8">
            PROGRAM ORIENTATIV, SE POATE DECALA IN FUNCTIE DE DESFASURAREA
            EVENIMENTULUI. Casca auto (deschisa sau inchisa) este obligatorie
            atat pentru pilot cat si pentru pasager. In caz de neprezentare la
            eveniment, banii nu se pot returna. Sumele achitate vor putea fi
            folosite in cadrul altui eveniment numai daca prezentul eveniment
            este anulat de catre organizator. Pentru intrebari si nedumeriri nu
            ezitati sa ne contactati pe Facebook, Instagram sau Email la
            tablejaponeze@gmail.com. Va asteptam in numar cat mai mare!
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="transition duration-300 bg-opacity-50 border border-none collapse collapse-arrow hover:bg-opacity-80 bg-neutral"
      >
        <input type="radio" name="my-accordion-1" defaultChecked={true} />
        <div className="text-xl font-semibold text-center uppercase collapse-title">
          Program
        </div>
        <div className=" collapse-content">
          <div className="grid items-start grid-cols-1 gap-6 px-4 mx-auto text-center w-fit xl:gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h3 className="py-3 font-bold rounded-sm bg-base-300 bg-opacity-40">
                SAMBATA, 23 SEPTEMBRIE{' '}
              </h3>
              <table className="table mx-auto w-fit">
                <tbody>
                  {saturday.map((item) => (
                    <tr
                      key={item.activitate + item.ora}
                      className="border-none"
                    >
                      <td className="px-1 py-2 sm:px-4 ">{item.ora}</td>
                      <td className="p-2">{item.activitate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="py-3 font-bold rounded-sm bg-base-300 bg-opacity-40">
                DUMINICĂ, 24 SEPTEMBRIE{' '}
              </h3>
              <table className="table w-full mx-auto ">
                <tbody>
                  {sunday.map((item) => (
                    <tr
                      key={item.activitate + item.ora}
                      className="border-none"
                    >
                      <td className="p-0 w-fit">{item.ora}</td>
                      <td className="p-2">{item.activitate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
