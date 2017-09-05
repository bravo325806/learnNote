function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};
    // console.log(magazineArr);

    magazineArr.forEach(function (word) {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        }
        magazineObj[word]++;
    });

    var noteIsPossible = true;
    noteArr.forEach(function (word) {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) {
                noteIsPossible = false;
            }
        } else {
            noteIsPossible = false;
        }
    });

    return noteIsPossible;
}
harmlessRansomNote('this is the magazine text 1', '1 this 123 is abc the abc magazine 123 text');