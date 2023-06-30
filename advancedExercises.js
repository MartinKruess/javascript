import rl from "readline-sync"

/* --------------- Urlaubskasse  --------------- */
  //  Übung zum Thema: Math.round, Math.floor, Math.ceil, if else,

/*
  Erstelle neue Variablen (gehalt: 2300€, sparAnteil: 12.5%, sparZiel: 1750€, monat: 3,)
  Aktuell haben wir den 28. Februar (Monat 2) und du bekommst dein Gehalt immer am 01. des Monats.
  Dein Ziel ist es im August (monat: 8) in den Urlaub zu fliegen, wenn du monatlich 12.5% deines Gehalts dafür sparst.
  Prüfe ob dein Ziel realisierbar ist (if else)
  Arbeite NICHT mit Schleifen (loops) sondern mit mehreren console.logs, jeder console.log steht für einen Monat
  console.log("März:" x €)
  console.log("April: " y €)
*/

const unfinished = "NOCH IM AUSBAU!"


/* --------------- Lass uns spielen! (hard) --------------- */

/*
  Symbole für die Ausgabe:
  Schere: ✂
  Stein: ∆
  Papier: □

  Der Grundaufbau ist bereits fertig. Baue die Logik inerhalb der "for Schleife" auf und Frage am Ende des Spiels ob der Spieler noch einmal spielen möchte, wenn "+" dann round--

  Im Falle einer Endlosschleife hilft: strg + c
*/

let round = 1
const choise = rl.question("Schere, Stein, Papier? ")
