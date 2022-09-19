function lowerOrUpper(letter) {
    letter = letter.charCodeAt()
    if(letter >= 65 && letter <= 90){
        console.log("upper-case");
    }else if(letter >= 97 && letter <= 122){
        console.log("lower-case");
    }
    
}
lowerOrUpper("f")