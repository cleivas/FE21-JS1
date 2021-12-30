const students = [
  "Abdullah Almasri",
  "Ahmad Albaroudi",
  "Alaa Aldroubi",
  "Arbi Arestakesians",
  "August Dahlström",
  "Ayub Alibare",
  "Benny Andersson",
  "Christoffer Edström",
  "Cornelia Bergentz",
  "Ediz Mehmet",
  "Evgenia Trudova",
  "Felix Rydberg",
  "Forqan Badri",
  "Jimmy Wallener",
  "Joakim Sjöström",
  "Jonathan Sandqvist",
  "Liam Billing",
  "Lian Dela Cruz",
  "Lina Riddersporre",
  "Malgorzata Pick",
  "Michaela Sydow",
  "Moa Rudsäter",
  "Nathalie Pettersson",
  "Niklas Grimberg",
  "Niklas Krig",
  "Noor El Masri",
  "Othman Abdolhalim",
  "Saga Ekberg",
  "Sara Majava",
  "Shayaan Ahmed",
  "Sohny Boukhezzar",
  "taleb hammoude",
  "Victoria Quainoo",
];
const group1 = [];
const group2 = [];
const group1Size = Math.round(students.length/2);
const group2Size = students.length - group1Size;

for(let i=0; i<group1Size; i++){
    const randomIndex = Math.round(Math.random()*(students.length-1));
    group1.push(students[randomIndex]);
    students.splice(randomIndex, 1);
}

for(let i=0; i<group2Size; i++){
    const randomIndex = Math.round(Math.random()*(students.length-1));
    group2.push(students[randomIndex]);
    students.splice(randomIndex, 1);
}
// console.log(group1, group2);

for( g of group1){
    const section = document.querySelector('#grupp1');
    const p = document.createElement('p');
    p.innerText = g;
    section.appendChild(p);
}

for( g of group2){
    const section = document.querySelector('#grupp2');
    const p = document.createElement('p');
    p.innerText = g;
    section.appendChild(p);
}