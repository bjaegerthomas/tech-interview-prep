function validAnagram (word1, word2) {
    
    let split1 = word1.split("");
    let split2 = word2.split("");
    
    if (word1.trim().length != word2.trim().length) {
        console.log("These two strings are not valid anagrams of each other.")
    }
    
    for (letter1 in split1) {
        for (letter2 in split2) {
            
            let index1 = split1.indexOf(letter1);
            let index2 = split2.indexOf(letter2);
            
            if (split1[letter1] == split2[letter2]) {
                split1.splice(index1, 1);
                split2.splice(index2, 1);
            }
            console.log(split1);
            console.log(split2);
        }
    }
    if (split1.length == 0 && split2.length == 0) {
        console.log("These two strings are valid anagrams of each other")
    }
    else {
        console.log("These two strings are not valid anagrams of each other.") 
    }
  };

  validAnagram ("banana", "anaban");