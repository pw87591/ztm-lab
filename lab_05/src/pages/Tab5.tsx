import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useRef, useState } from 'react';
import './Tab5.css';

const Tab5: React.FC = () => {
  const aRef = useRef<HTMLIonInputElement>(null);
  const bRef = useRef<HTMLIonInputElement>(null);
  const cRef = useRef<HTMLIonInputElement>(null);
  const dRef = useRef<HTMLIonInputElement>(null);
  const alfaRef = useRef<HTMLIonInputElement>(null);
  const gammaRef = useRef<HTMLIonInputElement>(null);

  const [wynik, setWynik] = useState<string>('');

  const oblicz = () => {
    const a = parseFloat(aRef.current?.value as string);
    const b = parseFloat(bRef.current?.value as string);
    const c = parseFloat(cRef.current?.value as string);
    const d = parseFloat(dRef.current?.value as string);
    const alfa = parseFloat(alfaRef.current?.value as string);
    const gamma = parseFloat(gammaRef.current?.value as string);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(alfa) || isNaN(gamma)) {
      setWynik('Uzupełnij wszystkie pola');
      return;
    }

    if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
      setWynik('Boki muszą być dodatnie');
      return;
    }

    if (alfa <= 0 || alfa >= 360 || gamma <= 0 || gamma >= 360) {
      setWynik('Kąty muszą być z przedziału (0°, 360°)');
      return;
    }

    const s = (a + b + c + d) / 2;
    const rad = ((alfa + gamma) / 2) * Math.PI / 180;
    const cos = Math.cos(rad);
    const podPierwiastkiem = (s - a) * (s - b) * (s - c) * (s - d) - a * b * c * d * cos * cos;

    if (podPierwiastkiem <= 0) {
      setWynik('Taki czworokąt nie istnieje');
      return;
    }

    const pole = Math.sqrt(podPierwiastkiem);
    setWynik('Pole: ' + pole.toFixed(2));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Czworokąt</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <h1 style={{ textAlign: 'center', padding: '10px' }}>Pole czworokąta</h1>
          <IonCardContent>
            <IonItem>
              <IonInput label="Bok a" type="number" ref={aRef} />
            </IonItem>
            <IonItem>
              <IonInput label="Bok b" type="number" ref={bRef} />
            </IonItem>
            <IonItem>
              <IonInput label="Bok c" type="number" ref={cRef} />
            </IonItem>
            <IonItem>
              <IonInput label="Bok d" type="number" ref={dRef} />
            </IonItem>
            <IonItem>
              <IonInput label="Kąt alfa (°)" type="number" ref={alfaRef} />
            </IonItem>
            <IonItem>
              <IonInput label="Kąt gamma (°)" type="number" ref={gammaRef} />
            </IonItem>

            <IonButton expand="block" style={{ marginTop: '15px' }} onClick={oblicz}>
              Oblicz
            </IonButton>

            <h2 style={{ textAlign: 'center', padding: '10px' }}>{wynik}</h2>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;