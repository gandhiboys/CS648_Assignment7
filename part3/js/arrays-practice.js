/*eslint-env browser*/

//STEP 1

var favMovies = ["Interstellar", "DarkKnight", "Shutter Island", "EndGame", "Casino Royale"];
window.console.log(favMovies[1]);

//STEP 2

var movies= [];
movies[0] = "Interstellar";
movies[1] = "DarkKnight";
movies[2] = "Shutter Island";
movies[3] = "EndGame";
movies[4] = "Casino Royale";
window.console.log(movies[0]);

//STEP 3

var moviesNew= [];
moviesNew[0] = "Interstellar";
moviesNew[1] = "DarkKnight";
moviesNew[2] = "Shutter Island";
moviesNew[3] = "EndGame";
moviesNew[4] = "Casino Royale";
moviesNew.splice(2, 0, "Theory of Everything");
window.console.log(moviesNew.length);

//STEP 4

var moviesNew2= [];
moviesNew2[0] = "Interstellar";
moviesNew2[1] = "DarkKnight";
moviesNew2[2] = "Shutter Island";
moviesNew2[3] = "EndGame";
moviesNew2[4] = "Casino Royale";
delete moviesNew2[0];
window.console.log(moviesNew2.length);

//STEP 5

var moviesNew3= [];
moviesNew3[0] = "Interstellar";
moviesNew3[1] = "DarkKnight";
moviesNew3[2] = "Shutter Island";
moviesNew3[3] = "EndGame";
moviesNew3[4] = "Casino Royale";
moviesNew3[5] = "Theory of Everything";
moviesNew3[6] = "Transformers : Darkside";
var i;
for (i = 0; i < moviesNew3.length; i += 1) {
    window.console.log(moviesNew3[i]);
}

//STEP 6

var moviesNew5= [];
moviesNew5[0] = "Interstellar";
moviesNew5[1] = "DarkKnight";
moviesNew5[2] = "Shutter Island";
moviesNew5[3] = "EndGame";
moviesNew5[4] = "Casino Royale";
moviesNew5[5] = "Theory of Everything";
moviesNew5[6] = "Transformers : Darkside";
var element;
for (element in moviesNew5) {
    if (moviesNew5.hasOwnProperty(element)) {
        window.console.log(moviesNew5[element]);
    }
}

//STEP 7

var moviesNew6= [];
moviesNew6[0] = "Interstellar";
moviesNew6[1] = "DarkKnight";
moviesNew6[2] = "Shutter Island";
moviesNew6[3] = "EndGame";
moviesNew6[4] = "Casino Royale";
moviesNew6[5] = "Theory of Everything";
moviesNew6[6] = "Transformers : Darkside";
moviesNew6.sort();

var element;
for (element in moviesNew6) {
    if (moviesNew6.hasOwnProperty(element)) {
        window.console.log(moviesNew6[element]);
    }
}

//STEP 8

var moviesNew6= [];
moviesNew6[0] = "Interstellar";
moviesNew6[1] = "DarkKnight";
moviesNew6[2] = "Shutter Island";
moviesNew6[3] = "EndGame";
moviesNew6[4] = "Casino Royale";
moviesNew6[5] = "Theory of Everything";
moviesNew6[6] = "Transformers : Darkside";
var i;
for(i = 0; i < moviesNew3.length; i += 1) {
    window.console.log(moviesNew6[i]);
}

var leastFav = [];
leastFav[0] = "Fast and Furious 7";
leastFav[1] = "Justice League";
leastFav[2] = "Beauty Palace";
var j;
for(j = 0; j < leastFav.length; j += 1) {
    window.console.log(leastFav[j]);
}
//STEP 9

var moviesNew7= [];
moviesNew7[0] = "Interstellar";
moviesNew7[1] = "DarkKnight";
moviesNew7[2] = "Shutter Island";
moviesNew7[3] = "EndGame";
moviesNew7[4] = "Casino Royale";
moviesNew7[5] = "Theory of Everything";
moviesNew7[6] = "Transformers : Darkside";

var leastFav1 = [];
leastFav1[0] = "Fast and Furious 7";
leastFav1[1] = "Justice League";
leastFav1[2] = "Beauty Palace";

moviesNew7 = moviesNew7.concat(leastFav1);
moviesNew7.sort();
moviesNew7.reverse();
var i;
for(i = 0; i < moviesNew7.length; i += 1) {
    window.console.log(moviesNew7[i]);
}

//STEP 10

var moviesNew7= [];
moviesNew7[0] = "Interstellar";
moviesNew7[1] = "DarkKnight";
moviesNew7[2] = "Shutter Island";
moviesNew7[3] = "EndGame";
moviesNew7[4] = "Casino Royale";
moviesNew7[5] = "Theory of Everything";
moviesNew7[6] = "Transformers : Darkside";

var leastFav1 = [];
leastFav1[0] = "Fast and Furious 7";
leastFav1[1] = "Justice League";
leastFav1[2] = "Beauty Palace";

moviesNew7 = moviesNew7.concat(leastFav1);
window.console.log(moviesNew7.pop());