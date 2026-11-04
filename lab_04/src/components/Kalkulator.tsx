import { IonCard, IonCardContent,IonGrid,IonRow,IonCol } from '@ionic/react';
import { useRef, useState} from 'react';
const Kalkulator: React.FC = () => {

const [wynik, setObliczonyWynik] = useState<number>();
 return (
    
 <IonCard>
    <IonCardContent>
        <h2>Wynik: {wynik}</h2>
    </IonCardContent>
 </IonCard>
 );
};
export default Kalkulator;