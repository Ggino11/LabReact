
import '../assets/css/Home.css';
import Header from '../funcComponents/ui/Header';
import Footer from '../funcComponents/ui/Footer';
import Card from '../funcComponents/ui/Card';
import Esame from '../funcComponents/ui/Esame';
import { useState, useEffect } from 'react'; //importo per utilizzare gli stati

import Cruscotto from '../funcComponents/Cruscotto';

function Home() {
//stato oggetto esame
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
    const { exam, examList } = state;

    // Controllo se la data inserita è maggiore del giorno attuale 
    const now = new Date();
    const selectedDate = new Date(exam.examDate);
    if (selectedDate > now) {
      alert('La data deve essere minore o uguale alla data attuale!');
      return;
    }

    // Controllo se il voto è un numero tra 0 e 31
    const vote = parseInt(exam.examVote);
    if (isNaN(vote) || vote < 0 || vote > 31) {
      alert('Il voto deve essere un numero tra 0 e 31!');
      return;
    }

    // Controllo se il nome esiste già nella lista esami
    const examName = exam.examName.trim().toLowerCase();
    const existingExam = examList.find(exam => exam.examName.trim().toLowerCase() === examName);
    if (existingExam) {
      alert('Esame già presente nella lista!');
      return;
    }
    // Se tutte le condizioni sono verificate, aggiungo l'esame alla lista
    setState(
      {
        ...state,
        examList: [...state.examList, state.exam]
      }
    )
  }
  //funzioni per settare gli stati delle inputBox
  function getNameExam(nameExam) {
    //console.log('esame inserito', nameExam)
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

    setState({
      ...state,
      exam: {
        ...state.exam,
        examDate: dateExam
      }
    })
  }
  function deleteExam(index) {
    const examList = [...state.examList]; // crea una copia dell'array
    examList.splice(index, 1); // rimuove l'elemento corrispondente all'indice
    setState({
      ...state,
      examList: examList // sostituisce l'array originale con quello aggiornato
    });

    localStorage.setItem("examList", JSON.stringify(examList)); // aggiorna il localStorage
  }
  return (
    <div className="Home">
      <Header />

      <div className='container'>
        <Card
          label={"Aggiungi un'esame al libretto"}
          functionButton={getSaveData}
          functionFirstInput={getNameExam}
          functionSecondInput={getValueVote}
          functionThirdInput={getDate}
        />
        <Cruscotto
        />

      </div>
      {/* controllo lunghezza dell'array examList nello stato state è maggiore di zero, ovvero se sono presenti
        esami se no eveito di stampare a video il componente vuoto  */}
      {state.examList.length > 0 && (
        <section id="lista">
          <div>
            <h3 style={{ textAlign: 'center' }}>Lista Esami:</h3>
          </div>
          <div className='listaEsami'>
            {state.examList.map((exam, index) => (
              <Esame key={index} exam={exam}
                onDelete={() => deleteExam(index)}
                //tiene traccia dell'indice nella lista esami
                index={index} />
            ))}
          </div>
        </section>
      )}


      <Footer />
    </div>
  );
}

export default Home;
