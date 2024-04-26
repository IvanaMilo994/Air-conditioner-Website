import React from 'react';
import '../styles/Pages/AboutUs.css';

const AboutUs = () => {
    return (
      <div className="aboutUsContainer">
        <div className="textContainer">
          <h1>Ko smo mi?</h1>
          <p>Angel Frigo je firma osnovana 2003. godine i bavi se prodajom, ugradnjom i servisom svih vrsta rashladnih i klima uredjaja.</p>
          <p>Angel Frigo nudi kompletnu uslugu od pregleda prostora do dostave klima uredjaja i ugradnje. Prodajemo i ugradjujemo isključivo klima uredjaje za koje Vam možemo ponuditi kompletnu tehničku podršku.</p>
          <p>Naš tim odlikuje profesionalnost, efikasnost i brzina, a kao potvrdu kvaliteta imamo niz zadovoljnih, dugogodičnjih klijenata i preko 200 000 m2 klimatizovanog prostora.</p>
          <p>Od osnivanja smo stalni podizvođač firme “Steelsoft” d.o.o.</p>
          <p>Neki od korisnika naših usluga su: Delta DMD, Orion Telekom, Viši sud Beograd, Drugi Opštinski sud, Viši Apelacioni sud, Mađarska Ambasada, Ansal steel, Sanaco company, Hygia pharm, Novolux, Berlight d.o.o, Kaniko, Monamis, Ordinacija Jurisic, Hotel Zeder...</p>
          <h2>Zvanični serviser</h2>
          <p>Angel Frigo je zvanični serviser za ugradnju i održavanje klima uredjaja svetski poznatih marki LG i SAMSUNG. Posedujemo sve potrebne sertifikate kako za ugradnju tako i za servis i održavanje svih vrsta uredjaja kućnih i industrijskih varijanti</p>
        </div>
        <div className="logos">
          <img src={require("../Images/lg.png")} alt="LG Logo" />
          <img src={require("../Images/samsung.png")} alt="Samsung Logo" />
          <img src={require("../Images/galanz.png")} alt="Galanz Logo" />
        </div>
      </div>
    );
}

export default AboutUs;