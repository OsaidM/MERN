const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

  const { firstName, lastName, ...attributes } = person;

  const personCopy = { ...person };

console.log(firstName,lastName ,attributes, "\n/*/*/*/*/*/*/*/*/*/*/*//*/*/*/*/*/*/*/*//*/");
console.log(personCopy);




const sayHello = name => {
    console.log(`Hello ${name}`);
  };

  sayHello("Osaid");



  class Deck {
    initialize() {
      const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
      const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
      const deck = [];
      for (const suit of suits) {
        for (const face of faces) {
          deck.push(this.createCard(suit, face));
        }
      }
      this.deck = deck;
    }
  }
  Deck;
  const { faces } = Deck;
  console.log(faces, "\n/*/*/*/*/*/*/*/*/*/*/*//*/*/*/*/*/*/*/*//*/");