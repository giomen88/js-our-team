// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// # MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// # BONUS 1:
// Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)

// # BONUS 2:
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato

// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro! */

// // # DATI
// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 



// creo array

const team = [
    { nome: 'Wayne Barnett', ruolo: 'Founder & CEO', foto: 'wayne-barnett-founder-ceo.jpg' },
    { nome: 'Angela Caroll', ruolo: 'Chief Editor', foto: 'angela-caroll-chief-editor.jpg' },
    { nome: 'Walter Gordon', ruolo: 'Office Manager', foto: 'walter-gordon-office-manager.jpg' },
    { nome: 'Angela Lopez', ruolo: 'Social Media Manager', foto: 'angela-lopez-social-media-manager.jpg' },
    { nome: 'Scott Estrada', ruolo: 'Developer', foto: 'scott-estrada-developer.jpg' },
    { nome: 'Barbara Ramos', ruolo: 'Graphic Designer', foto: 'barbara-ramos-graphic-designer.jpg' }
]

console.log(team);

// recupero elemento
const cardsElement = document.getElementById('cards');

// stampo array nel dom
for (i = 0; i < team.length; i++) {
    const card = document.createElement('div');
    card.classList.add('col-3', 'card');
    const name = document.createElement('h4');
    name.className = 'name';
    const job = document.createElement('h5');
    job.className = 'job';
    const image = document.createElement('figure');

    const member = team[i];

    for (let key in member) {
        name.innerText = member['nome'];
        job.innerText = member['ruolo'];
        image.innerHTML = `<img src="../img/${member['foto']}">`;
    }
    card.append(image, name, job);

    cardsElement.append(card);
}