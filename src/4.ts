class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): boolean;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person} увійшов/увійшла в будинок.`);
    } else {
      console.log("Двері зачинені");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): boolean {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Двері тепер відчинені.");
      return true;
    }

    console.log("Двері зачинені. Не вірний ключ.");
    return false;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
