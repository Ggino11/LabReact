
import '../assets/css/Home.css';
import Header from '../funcComponents/ui/Header';
import Footer from '../funcComponents/ui/Footer';
import Button from '../funcComponents/ui/Button';
import Card from '../funcComponents/ui/Card';
import InputBox from '../funcComponents/ui/InputBox';
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
  {/*fine configurazione stati */ }

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

      </div>

      <p>Lista Esami:</p>
        {state.examList.map((exam, index) => (
          <Esame key={index} exam={exam} />
        ))}
        <Esame />
        <Footer
        />
    </div>
  );
}

export default Home;
