import {
    CardCardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
    Button,
} from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import "./style.css";

import React from 'react';
import { CardMedia } from "@mui/material";

const filterProducts = [
    // Add your dummy data here
    { id: 1, name: 'Product 1', price: '$77799.99', imageUrl: "../Images/lg.png" },
    { id: 2, name: 'Milos 2', price: '$799.99', imageUrl: "../Images/samsung.png" },
    { id: 3, name: 'Product 2', price: '$199.99', imageUrl: "../Images/samsung.png" },
    { id: 4, name: 'Test 2', price: '$199.99', imageUrl: "../Images/samsung.png" },
]

const CustomCard = ({
    basket,
    product,
    addProduct,
    updateProduct,
    RemoveItemFromBasket,
 
}) => {
    return <div>
        <section>
        <div class="glavni">


<h2 class="podnaslov">TCL Inverter klima TAC-12CHSD XA73IF Elite lite + TCL Prečišćivač vazduha Breeva A3B</h2>
<article> Inovativna efikasnost za optimalan komfor
Upoznajte TCL Inverter klimu TAC-12CHSD XA73IF Elite lite A++ A+ R32 12000BTU, savršenu harmoniju savremene tehnologije i energetske efikasnosti. Sa energetskom klasom A++ za hlađenje i A+ za grejanje, ovaj model klime pruža izvanredne performanse uz značajne uštede energije. Inverter tehnologija omogućava ovom uređaju da precizno i efikasno reguliše temperaturu, obezbeđujući optimalnu klimu u vašem domu uz minimalnu potrošnju energije. </article>
<div class="macka">
<p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk mjau</p>
<div class="slika">
    <img src={require("../../Images/samsung.png")} />
</div>

</div>
<aside>
    cena:47.770,00
</aside>


<table cellpadding="10" cellspacing="1" border="1"></table>


</div>

<div class="podnozje">
<p>Napomena: garancija se odnosi na klima uređaj.</p>

</div>
        </section>


    </div>
}

export default CustomCard

