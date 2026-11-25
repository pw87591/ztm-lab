import { useState } from 'react';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent,
  IonGrid,
  IonHeader, IonInput, IonPage, IonRow, IonText, IonTitle, IonToolbar,
} from '@ionic/react';
import { Controller, useForm } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/swiper.css';
import '@ionic/react/css/ionic-swiper.css';
import './Tab3.css';

type Dane = {
  imie: string;
  nazwisko: string;
  haslo: string;
  telefon: string;
  email: string;
};

const Tab3: React.FC = () => {
  const { control, handleSubmit, trigger, formState: { errors } } = useForm<Dane>({
    mode: 'onChange',
    defaultValues: { imie: '', nazwisko: '', haslo: '', telefon: '', email: '' },
  });
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const dalej = async (pola: (keyof Dane)[]) => {
    const ok = await trigger(pola);
    if (ok) swiper?.slideNext();
  };

  const [przeslane_dane, setPrzeslane_dane] = useState<Dane | null>(null);
  const wyslij = (dane: Dane) => {
    console.log(dane);
    setPrzeslane_dane(dane);
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rejestracja</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Rejestracja</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form onSubmit={handleSubmit(wyslij)}>
          <Swiper className="formularz" allowTouchMove={false} onSwiper={setSwiper}>
            <SwiperSlide>
              <div className="krok">
                <h2>Krok 1 z 3</h2>
                <Controller
                  name="imie"
                  control={control}
                  rules={{ required: 'Podaj imię' }}
                  render={({ field }) => (
                    <IonInput
                      label="Imię"
                      labelPlacement="floating"
                      value={field.value}
                      onIonInput={(e) => field.onChange(e.detail.value ?? '')}
                      onIonBlur={field.onBlur}
                    />
                  )}
                />
                {errors.imie && <IonText color="danger">{errors.imie.message}</IonText>}

                <Controller
                  name="nazwisko"
                  control={control}
                  rules={{ required: 'Podaj nazwisko' }}
                  render={({ field }) => (
                    <IonInput
                      label="Nazwisko"
                      labelPlacement="floating"
                      value={field.value}
                      onIonInput={(e) => field.onChange(e.detail.value ?? '')}
                      onIonBlur={field.onBlur}
                    />
                  )}
                />
                {errors.nazwisko && <IonText color="danger">{errors.nazwisko.message}</IonText>}
                <IonButton expand="block" onClick={() => dalej(['imie',
                  'nazwisko'])}>Dalej</IonButton>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="krok">
                <h2>Krok 2 z 3</h2>
                <Controller
                  name="haslo"
                  control={control}
                  rules={{ required: 'Podaj hasło', minLength: { value: 8, message: 'Hasło musi mieć co najmniej 8 znaków' } }}
                  render={({ field }) => (
                    <IonInput
                      label="Hasło"
                      labelPlacement="floating"
                      type="password"
                      value={field.value}
                      onIonInput={(e) => field.onChange(e.detail.value ?? '')}
                      onIonBlur={field.onBlur}
                    />
                  )}
                />
                {errors.haslo && <IonText color="danger">{errors.haslo.message}</IonText>}
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonButton fill="outline" expand="block" onClick={() => swiper?.slidePrev()}>Wstecz</IonButton>
                    </IonCol>
                    <IonCol>
                      <IonButton expand="block" onClick={() => dalej(['haslo'])}>Dalej</IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="krok">
                <h2>Krok 3 z 3</h2>
                <Controller
                  name="telefon"
                  control={control}
                  rules={{ required: 'Podaj numer telefonu', pattern: { value: /^\d{9}$/, message: 'Niepoprawny numer telefonu' } }}
                  render={({ field }) => (
                    <IonInput
                      label="Telefon"
                      labelPlacement="floating"
                      type="tel"
                      value={field.value}
                      onIonInput={(e) => field.onChange(e.detail.value ?? '')}
                      onIonBlur={field.onBlur}
                    />
                  )}
                />
                {errors.telefon && <IonText color="danger">{errors.telefon.message}</IonText>}

                <Controller
                  name="email"
                  control={control}
                  rules={{ required: 'Podaj e-mail', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Niepoprawny email' } }}
                  render={({ field }) => (
                    <IonInput
                      label="Adres e-mail"
                      labelPlacement="floating"
                      type="email"
                      value={field.value}
                      onIonInput={(e) => field.onChange(e.detail.value ?? '')}
                      onIonBlur={field.onBlur}
                    />
                  )}
                />
                {errors.email && <IonText color="danger">{errors.email.message}</IonText>}

                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonButton fill="outline" expand="block" onClick={() => swiper?.slidePrev()}>Wstecz</IonButton>
                    </IonCol>
                    <IonCol>
                      <IonButton expand="block" type="submit">Wyślij</IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </SwiperSlide>

          </Swiper>
        </form>
        {przeslane_dane &&
          <IonCard color="primary">
            <IonCardHeader>
              <IonCardTitle>Wysłane dane</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Imię: {przeslane_dane.imie}</p>
              <p>Nazwisko: {przeslane_dane.nazwisko}</p>
              <p>Hasło: {'*'.repeat(przeslane_dane.haslo.length)}</p>
              <p>Telefon: {przeslane_dane.telefon}</p>
              <p>Adres e-mail: {przeslane_dane.email}</p>
            </IonCardContent>
          </IonCard>
        }

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
