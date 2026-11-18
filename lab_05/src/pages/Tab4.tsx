import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab4.css';
import Kalkulator from '../components/Kalkulator';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kalkulator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Kalkulator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Kalkulator></Kalkulator>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
