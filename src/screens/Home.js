
import '../assets/css/Home.css';
import Header from '../funcComponents/ui/Header';
import Footer from '../funcComponents/ui/Footer';
import Button from '../funcComponents/ui/Button';
import Card from '../funcComponents/ui/Card';
import InputBox from '../funcComponents/ui/InputBox';
import Esame from '../funcComponents/ui/Esame';
import { useState } from 'react';

function Home() {
  const [examList, setExamList] = useState([]);
  const [name, setName] = useState([]);
  const [vote, setVote] = useState([]);
  const [date, setDate] = useState([]);
  const [exam, setExam] = useState([]);

  function setExameFunc(){
    
   const exam = {
      examName: name,
      vote: vote,
      date: date
    }
    console.log(exam);
    /* setExam(exam);*/  
  }
 
  return (
    <div className="Home">
      <Header />

      <div className='container'>

        <Card
          label={"Aggiungi un'esame al libretto"}
          /* functionButton={saveDate} */
          functionFirstInput={setName}
          functionSecondInput={setVote}
          functionThirdInput={setDate}
          functionSubmit={setExameFunc}
        />

      </div>
      <Esame />
      <Footer
       />
    </div>
  );
}

export default Home;
