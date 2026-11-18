import { IonCard,IonAlert, IonCardContent,IonGrid,IonRow,IonCol, IonButton } from '@ionic/react';
import { useRef, useState} from 'react';
const Kalkulator: React.FC = () => {

const [pokazAlert, setPokazAlert] = useState(false);
const [wyswietlacz, setWyswietlacz] = useState<string>('0');
const [poprzednia, setPoprzednia] = useState<number | null>(null);
const [operacja, setOperacja] = useState<string | null>(null);
const przyciski= [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    'C','0','.','+',
    '='];

const akcja = (btn: string) => {
    if (btn === 'C') {
      setWyswietlacz('0');
      setPoprzednia(null);
      setOperacja(null);
      return;
    }

    if (btn === '=') {
      if (poprzednia === null || operacja === null) return;

      const biezaca = parseFloat(wyswietlacz);
      let wynik = 0;

      switch (operacja) {
        case '+':
          wynik = poprzednia + biezaca;
          break;
        case '-':
          wynik = poprzednia - biezaca;
          break;
        case '*':
          wynik = poprzednia * biezaca;
          break;
        case '/':
          if (biezaca === 0) {
            setWyswietlacz('0');
            setPoprzednia(null);
            setOperacja(null);
            setPokazAlert(true);
            return;
          }
          wynik = poprzednia / biezaca;
          break;
      }

      setWyswietlacz(parseFloat(wynik.toFixed(10)).toString());
      setPoprzednia(null);
      setOperacja(null);
      return;
    }

    if (btn === '+' || btn === '-' || btn === '*' || btn === '/'){
      if (wyswietlacz === 'Nie można dzielić przez zero') return;
      setPoprzednia(parseFloat(wyswietlacz));
      setOperacja(btn);
      setWyswietlacz('0');
      return;
    }

    if (wyswietlacz === '0' || wyswietlacz === 'Nie można dzielić przez zero') {
      setWyswietlacz(btn);
    } else {
      setWyswietlacz(wyswietlacz + btn);
    }
  };

 return (
 <IonCard>
    <h1 style={{ textAlign: 'center',padding: '10px' }}>Kalkulator Zwykły</h1>
    <IonCardContent>
        <h2 style={{ textAlign: 'center',padding: '10px' }}>{wyswietlacz}</h2>
        <IonGrid style={{width: '200px'}}>
          <IonRow>
            {przyciski.map((btn, id) => (
                <IonCol size="3" key={id} offset={btn === '=' ? '9' : undefined}>
                    <IonButton expand="block" onClick={() => akcja(btn)}>
                        {btn}
                    </IonButton>
                </IonCol>
            ))}
        </IonRow>
        </IonGrid>
        <IonAlert
          isOpen={pokazAlert}
          header="Błąd"
          message="Nie można dzielić przez zero"
          buttons={['OK']}
          onDidDismiss={() => setPokazAlert(false)}
        />
    </IonCardContent>
 </IonCard>
 );
};
export default Kalkulator;