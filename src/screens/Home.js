
import '../assets/css/Home.css';
import Header from '../funcComponents/ui/Header';
import Footer from '../funcComponents/ui/Footer';
import Button from '../funcComponents/ui/Button';
import Card from '../funcComponents/ui/Card';
import InputBox from '../funcComponents/ui/InputBox';

function Home() {
  return (
    <div className="Home">
       <Header />
       
       <div className='container'>
        
        <Card 
        label={"Aggiungi un'esame al libretto"}/>
        
        <Card 
        label={"Visualizza il libretto universitario"}>
          
        </Card>
       </div>
       <p>
        <Button
          label={'Salva'}
          classCss={'Button'}
          
        />
      </p>
       <Footer
       copyright = "&copy; 2023 Enrico Cornero & Simone Amitrano" />
    </div>
  );
}

export default Home;
