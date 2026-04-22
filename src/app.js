import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 const suits = [
      { symbol: "♥", color: "red"   },
      { symbol: "♦", color: "red"   },
      { symbol: "♠", color: "black" },
      { symbol: "♣", color: "black" }
    ];
 
    const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
 
    function generateCard() {
      var suit  = suits [Math.floor(Math.random() * 4)];
      var value = values[Math.floor(Math.random() * 13)];
 
      document.getElementById("center").textContent      = value;
      document.getElementById("center").className        = "center " + suit.color;
 
      document.getElementById("corner-top").innerHTML    = value + "<br>" + suit.symbol;
      document.getElementById("corner-top").className    = "corner-top " + suit.color;
 
      document.getElementById("corner-bottom").innerHTML = value + "<br>" + suit.symbol;
      document.getElementById("corner-bottom").className = "corner-bottom " + suit.color;
    }
 
    window.onload = generateCard;