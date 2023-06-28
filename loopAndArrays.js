/* --------------- Lass uns spielen! (Very hard) --------------- */

/*
  Hierfür benötigen wir eine For Schlefe und einen Array (idealerweise)!!!
  
  Mit unserem bisherigen Wissen lassen sich Spiele wie 17 und 4, Blackjack oder Schere, Stein, Papier bereits ohne grafische Oberlächen umsetzen.
  Lass uns doch mal versuchen ein Blackjack Spiel aufzubauen.
  
  Befehle (ohne double, split und surrender):
  Hit - eine weitere Karte nehmen
  stand - keine weitere Karte
  
  Jeder spieler bekommt zu Beginn des Spieles 2 Karten.
  Karten Werte:
  Die Karten 7-10 zählen so viele Punkte wie draufstehen
  Bildkarten zählen als 10
  Das Ass kann je nach Wahl des Spielers 1 oder 11 Punkte gaben

  Das Ziel des Spieles ist es mehr Punkte zu haben als der Dealer und nicht mehr Punkte als 21
*/

let cards = 0

if(cards < 21){
  // Zug
} else if ( cards > 21){
  // lose
} else if (cards === 21) {
  // Win
}