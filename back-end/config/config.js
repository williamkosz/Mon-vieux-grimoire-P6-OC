const mongoose = require ("mongoose");


const connectDB = () => {
     mongoose.connect("mongodb+srv://Szelko:mdTtDYZz8.JpzQg@mon-vieux-grimoire.rnsqh5i.mongodb.net/?retryWrites=true&w=majority&appName=mon-vieux-grimoire")
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
}

module.exports = connectDB