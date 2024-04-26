import React from 'react';
import "./Footer.css"

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*column1*/}
                    <div className="col">
                        <h4>Kontakt</h4>
                        <ul className="list-unstyled">
                            <li>064/12345678</li>
                            <li>Galilejeva 9, Zvezdara</li> 
                            <li>Beograd, Srbija</li>
                            
                        </ul>    
                     </div>
                    {/*column2*/}
                    <div className="col">
                        <h4>Kako radimo</h4>
                        <ul className="list-unstyled">
                            <li>Usluge za fizicka i pravna lica</li>
                            <li>Servis i montaza klima uredjaja</li>
                            <li>Dolazak na adresu u sto kracem roku</li> 
                        </ul>    
                     </div>
                    {/*column3*/}
                    <div className="col">
                        <h4>Dodatne informacije</h4>
                        <ul className="list-unstyled">
                            <li>Radno vreme ponedeljak-petak od 08-20h</li>
                            <li>Mogucnost zaposlenja</li>
                            <li>Kontakt emailom office@angelfrigo.co.rs nam je puno draži, jer nas ne prekida u poslu i vožnji.</li> 
                        </ul>    
                     </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;(new Date().getFullYear()) Angel Frigo | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;