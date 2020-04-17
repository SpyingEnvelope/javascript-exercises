const getTheTitles = function(books) {
    for(let title in books){
        let myArray = [books[0].title];
        myArray.push(books[1].title);
        return myArray;
    }

}

module.exports = getTheTitles;
