import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header />
      <Card
        gorsel="🦁"
        name="Aslan"
        aciklama="Gücü ve liderliğiyle ormanların kralı."
      />
      <Card
        gorsel="🐶"
        name="Kopek"
        aciklama="Sadakati ve dostluğu ile en yakın arkadaşınız."
      />
      <Card
        gorsel="🐼"
        name="Panda"
        aciklama="Sevimliliği ve huzur verici tavırlarıyla doğanın incisi."
      />
      <Card
        gorsel="🐰"
        name="Tavsan"
        aciklama="Hızlı, sevimli ve enerjik dostunuz."
      />
      <div className="flex flex-row gap-4 justify-center items-center my-4 w-full max-w-xl mx-auto">
        <Button type="Primary" title="Bilgi Al" />
        <Button type="Secondary" title="Randevu Olustur" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
