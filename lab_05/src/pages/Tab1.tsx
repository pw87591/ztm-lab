import { IonContent,IonList,IonItem,IonThumbnail,IonLabel, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab1.css';

type Item = {
 src: string;
 text: string;
};
const items: Item[] = [
 { src: '/img/kot1.jpg', text: 'Kot 1' },
 { src: '/img/kot2.jpg', text: 'Kot 2' },
 { src: '/img/kot3.jpg', text: 'Kot 3' },
 { src: '/img/kot4.jpg', text: 'Kot 4' },
];

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonList>
          {items.map((image) => (
          <IonItem key={image.src}>
          <IonThumbnail slot="start">
          <img src={image.src} alt={image.text} loading="lazy" />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
          </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
