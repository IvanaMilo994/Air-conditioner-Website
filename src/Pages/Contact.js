import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>Angel Frigo d.o.o.</p>
            <p>Address: Ustanička 189, 11050 Beograd, Srbija</p>
            <p>Phone: +381 11 34 59 356</p>
            <p>Email: office@angelfrigo.co.rs</p>
            <p>PIB: 104213505</p>
            <p>Matični broj: 20450952</p>
            <p>Šifra delatnosti: 4322 - Instalacije i sredstva za grejanje i klimatizaciju</p>
            <p>Radno vreme: Ponedeljak - Petak 08:00 - 16:00</p>
            <p>Subota 08:00 - 15:00</p>
            <p>Nedelja - neradni dan</p>
            <p>Primerak rešenja o upisu u registar APR: <a href="https://tinyurl.com/y5f9jrdb" target="_blank" rel="noreferrer">Download</a></p>
            <p>Primerak sertifikata o upisu u registar APR: <a href="https://tinyurl.com/y5f9jrdb" target="_blank" rel="noreferrer">Download</a></p>
            <p>Banka: OTP banka Srbija</p>
            <p>Šifra banke: 220</p>
            <p>Tečni račun: 325-9500900017350-50</p>
            <p>IBAN: RS35325950090173505025</p>
            <p>SWIFT/BIC: OTPVRS22</p>
            <p>Google Maps location: <a href="https://g.page/angel-frigo-beograd?share" target="_blank" rel="noreferrer">View location</a></p>
            <p>Feel free to contact us using the form below:</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;