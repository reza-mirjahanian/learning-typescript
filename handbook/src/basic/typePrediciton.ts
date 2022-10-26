interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

class Eagle implements Bird {
    fly() {
        console.log('hi')
    }
}

class RedFish implements Fish {
    swim() {
        console.log('hi')
    }
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}


let pet = Math.random() > 0.5 ? new RedFish() : new Eagle();


if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

//////////////

// Discriminated unions are better

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;
