import { IonContent,IonGrid,IonRow,IonCol,IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/swiper.css';
import '@ionic/react/css/ionic-swiper.css';



import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const slideChange = (s: SwiperType) => {
    setDisablePrev(s.isBeginning);
    setDisableNext(s.isEnd);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Swiper className="slajdy" initialSlide={0} speed={300} onSwiper={setSwiper}
        onSlideChange={slideChange}>
          <SwiperSlide><img src="/img/kot1.jpg" alt="Kot 1" /></SwiperSlide>
          <SwiperSlide><img src="/img/kot2.jpg" alt="Kot 2" /></SwiperSlide>
          <SwiperSlide><img src="/img/kot3.jpg" alt="Kot 3" /></SwiperSlide>
          <SwiperSlide><img src="/img/kot4.jpg" alt="Kot 4" /></SwiperSlide>
        </Swiper>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block" disabled={disablePrev} onClick={() =>
                swiper?.slidePrev()}>PREV</IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" disabled={disableNext} onClick={() =>
                swiper?.slideNext()}>NEXT</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
