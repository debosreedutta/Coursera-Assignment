/*
Solution of assignment 4:

Expected output:

Hello Debosree
Good Bye Jerry
Good Bye Justin
Good Bye Jack
Hello Harry
Hello Brent
Hello Millie
Hello Franklin
Hello Parker
Good Bye Jacob
*/

(function() {
    var names = ["Debosree", "Jerry", "Justin", "Jack", "Harry", "Brent", "Millie", "Franklin", "Parker", "Jacob"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
