import './TypeIt.js';

// Template
new TypeIt("#ID", {
	loop: true
}).type("Ask! ").pause(1500).type("Support! ").pause(1500).type("Understand!").move(-21).delete(3).move(9).delete(7).move(12).delete(10).move(-3).delete(1).type(".").move(2).delete(1).type(".").move(2).type(".").move(1).pause(4000).delete().go();

new TypeIt("#troll", {
  strings: ["click the button for information about 'Project management'"]
}).go();

new TypeIt("#oof", {
  loop: true,
  strings: ["<b style='color:orange; font-family: bitline;'>UNDER</b>", "<b style='color:red; font-family: glitch'> construction </b>"]
}).pause(2000).delete().go();

//Sedrowow Chaos Companies