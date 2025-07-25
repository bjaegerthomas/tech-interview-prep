function constructNote(msg, ltr) {
    const message = msg.split("").sort();
    const letters = ltr.split("").sort();
    
    let msgCount = {};
    let ltrCount = {};

    for (let letter of message) {
        msgCount[letter] = msgCount[letter] ? msgCount[letter] + 1 : 1;
    }

    for (let letter of letters) {
        ltrCount[letter] = ltrCount[letter] ? ltrCount[letter] + 1 : 1;
    }

    for (let letter in ltrCount) {
        if (!msgCount[letter] || msgCount[letter] < ltrCount[letter]) {
            return false;
        }
    }
    return true;
  }