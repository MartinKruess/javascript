console.error("JAVASCRIPT - EINLEITUNG")

// NODE

// Das Ausführen von JS in der Console geschieht mit dem Befehl:
// node dateiName.js

// ich fühle mich stark begrenzt... so ca auf eine Zeile

/*
  Hier kann
  Ich so viel
  schreiben, wie ich
  will!
*/

// Javascript - Variables

/*
  Die initialisierung einer Variable ist auf verschiedene Arten möglich.
  let variableName = Wert Diese Variable ist jederzeit überschreibbar, dadurch lassen sich beispielsweise Defaultwerte problemlos überschreiben.
  Siehe Beispiel-01

  var variableName = Wert (veraltet)
*/



/* ~~~~~~~~~~~~~~~~~~~~~ Beispiel-01 - LET VARIABLE ~~~~~~~~~~~~~~~~~~~~~ */

// Dies ist die Default/Standard Einstellung, da man mehr Arbeitstage als Urlaubstage hat
let changeableVariable = "Ich muss heute arbeiten!";

// Damit der Wecker nicht klingelt, wird der default überschrieben
changeableVariable = "Ich habe heute frei!"
console.log(changeableVariable)

/*
  Die Variablen-deklaration mit let kommt oft dort zum Einsatz wo es nötig ist einen vordefinierten Wert zu verändern. Ein gutes Beispiel hierfür sind Schleifen, Werteaustausch in einem Algorithmus oder Daten, die vom User jederzeit geändert werden können. Es signalisiert auch, dass die Variable nur in dem Block verwendet wird, in dem sie definiert ist.
*/


/* ~~~~~~~~~~~~~~~~~~~~~ Beispiel-02 - CONST VARIABLE ~~~~~~~~~~~~~~~~~~~~~ */

// const Variablen lassen sich nicht überschreiben und erzeugen bei dem Versuch einen Fehler!
const constantVariable = "Konstant!"
// constantVariable = "Nicht änderbar"
console.log(constantVariable)


/*
  Variable Schreibweisen:

  CamelCase -> articleArray, articleObject, userData
  SnakeCase -> article_Array, article_Object, user_Data
*/


/* ~~~~~~~~~~~~~~~~~~~~~ Beispiel-03 - ALLGEMEINE DATENTYPEN ~~~~~~~~~~~~~~~~~~~~~ */

let stringExample = "hallo"
let numberExample = 42
let boolExample = false // false/true 0/1
let nullExample = null

console.log(stringExample)
console.log(numberExample)
console.log(boolExample)
console.log(nullExample)

/*
  undefined: nicht lesbar / keine Daten hinterlegt wird gerne auch als NaN (Not a Number) angezeigt
  null: Variable kann jeden Datentype annehmen (default = Null)
*/



/* ~~~~~~~~~~~~~~~~~~~~~ Beispiel-04 - OBJEKT-DATENTYPEN ~~~~~~~~~~~~~~~~~~~~~ */

/*
  Ein Object ist wie eine Tabelle mit 2 Spalten oder eine Sammlung von Variablen, die zu dem selben Konstrukt gehören und wird mit {} angezeigt

  Spalte 1: Die erste Spalte steht hierbei für den Namen, den wir Ansprechen können

  Spalte 2: Die zweite Spalte beinhaltet die zugewiesenen Werte
*/


// Beispiel: Ein Object zum Thema Auto

// Sammle Teile und Eigenschaften des Autos in einem Object
const ObjectExample = {
  hersteller: "Volkswagen",
  baujahr: "2008",
}

console.log(ObjectExample)


/* ~~~~~~~~~~~~~~~~~~~~~ Beispiel-05 - ARRAY ~~~~~~~~~~~~~~~~~~~~~ */

/*
  Stelle dir ein Array als eine art Box vor in der man Werte, Variablen und Objects speichern kann. Ein Array wird eingeleitet mit eckigen Klammern []
*/

const arrExample = [1, 2, 3, 4, 5, "Hallo?", ObjectExample]
console.log(arrExample)


/* ~~~~~~~~~~~~~~~~~~~~~ Beispiel-06 - CONSOLE.LOG ~~~~~~~~~~~~~~~~~~~~~ */

/*
  Das console.log wird verwendet um Daten in der Console auszugeben. Im späteren Verlauf wird console.log dein bester Freund, da du mit Hilfe von console.log deinen Code debuggen wirst.
  Es gibt verschiedene Schreibweisen innerhalb eines console.log
*/

const fruit = "Banana!"
let sweet = "Chocolate"

console.log("ABC")
console.log(fruit) // zeigt Variablen Inhalt an
console.log(sweet + fruit) // Zeigt Variablen hintereinandern an (ohne Space)
console.log(sweet, fruit) // Zeigt Variablen hintereinandern an (mit Space)
console.log({sweet}) // Zeigt Variablen Namen und Inhalt an
console.log("Ich mag", sweet, "und", fruit) // Baut Variablen in einen Text ein (Simple)
console.log(`Ich mag ${sweet} und ${fruit}`) // Baut Variablen in einen Text ein (Advanced)

// Es gibt auch noch andere console.X befehle, die aktuell nicht wirklich wichtig sind
console.error(sweet)




/* ~~~~~~~~~~~~~~~~~~~~~ Übung (Freiwillig) ~~~~~~~~~~~~~~~~~~~~~ */

/*
  1. Lege folgende Variablen über dich an: Namen, Alter, Lieblingszahl
  2. Erstelle eine Variable und füge deine Namen in der neuen Variable zusammen
  3. Gebe die neue Variable mit console.log aus
  4. Addiere dein Alter und deine Lieblingszahl im console.log , damit das Ergebnis ausgeben wird.
  5. Lege eine neue Variable an und weise ihr den Wert deines alters - deiner Lieblingszahl an.
  6. Gebe die neue Variable aus.
  7. Addiere auf die neue Variable die Zahl 5
  *8. Gebe in EINEM console.log den Satz aus: "Ich heiße Max u.nd bin 37 Jahre alt. Meine Lieblingszahl ist 17."
*/