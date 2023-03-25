
import '../assets/css/Home.css';
import Header from '../funcComponents/ui/Header';
import Footer from '../funcComponents/ui/Footer';
import Card from '../funcComponents/ui/Card';
import Esame from '../funcComponents/ui/Esame';
import { useState, useEffect } from 'react'; //importo per utilizzare gli stati

function Home() {
  {/* per configurazione stati*/ }
  const [state, setState] = useState(

    {       // exam diventa un oggetto, io sto dichiarando tutte le variabili state e le imposto vuote perchè poi le prendo da ogni funzione
      exam: {
        examName: '',
        examVote: '',
        examDate: ''
      },
      //null? se non ce nessun items in array crea comunque array
      examList: localStorage.getItem("examList") == null ? [] : JSON.parse(localStorage.getItem("examList")) //collegamento array con local storage
    }
  )
  useEffect(
    () => {
      localStorage.setItem("examList", JSON.stringify(state.examList));
    }, [state.examList]
  )



  //funzioni per settare gli stati del Button
  function getSaveData() {
    console.log('esame registrato')


    setState(
      {
        ...state,
        examList: [...state.examList, state.exam]
      }
    )
  }
  //funzioni per settare gli stati delle inputBox
  function getNameExam(nameExam) {
    console.log('esame inserito', nameExam)
    setState({
      ...state,
      exam: {
        ...state.exam,
        examName: nameExam
      }
    })

  }

  function getValueVote(voteExam) {
    console.log('voto inserito', voteExam)
    setState({
      ...state,
      exam: {
        ...state.exam,
        examVote: voteExam
      }
    })
  }


  function getDate(dateExam) {
    console.log('data inserita', dateExam)
    setState({
      ...state,
      exam: {
        ...state.exam,
        examDate: dateExam
      }
    })
  }
  function deleteExam() {
    setState(
      {
        ...state,
        examList: []
      }
    )

    localStorage.removeItem("examList")
  }

  {/*fine configurazione stati */ }

  return (
    <div className="Home">
      <Header />

      <div className='container'>
        <Card
          label={"Aggiungi un'esame al libretto"}
          functionButton={getSaveData}
          functionButton2={deleteExam}
          functionFirstInput={getNameExam}
          functionSecondInput={getValueVote}
          functionThirdInput={getDate}
        />
          <Card
          label={"Aggiungi un'esame al libretto"}
          functionButton={getSaveData}
          functionButton2={deleteExam}
          functionFirstInput={getNameExam}
          functionSecondInput={getValueVote}
          functionThirdInput={getDate}
        />

      </div>

      {state.examList.length > 0 && (
        <section id="lista">
          <div>
            <h3 style={{ textAlign: 'center' }}>Lista Esami:</h3>
          </div>
          <div className='listaEsami'>
            {state.examList.map((exam, index) => (
              <Esame key={index} exam={exam} />
            ))}
          </div>
        </section>
      )}

      {/* controllo lunghezza dell'array examList nello stato state è maggiore di zero, ovvero se sono presenti
        esami se no eveito di stampare a video il componente vuoto  */}
      <Footer />
    </div>
  );
}

export default Home;
