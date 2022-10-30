type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

//////////////////////


type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;

type Greeting = "Hello, world"


/////////////////

type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
    (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});

person.on("firstNameChanged", newName => {

    console.log(`new name is ${newName.toUpperCase()}`);
});

person.on("ageChanged", newAge => {

    if (newAge < 0) {
        console.warn("warning! negative age");
    }
})
