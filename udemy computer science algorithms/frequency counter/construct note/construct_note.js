function constructNote(msg, ltr) {
    const message = msg.split("").sort();
    const letters = ltr.splt("").sort();
    
    let msgCount = {};
    let ltrCount = {};

    for (let letter of message) {
        msgCount[letter] = msgCount[letter] ? msgCount[letter] + 1 : 1;
    }

    for (let letter of letters) {
        ltrCount[letter] = ltrCount[letter] ? ltrCount[letter] + 1 : 1;
    }

    let result = [];

    for (i = 0; i <= ltr.length; i++) {
        if (ltrCount[i] === msgCount[i] && Object.values(ltrCount[i]) < Object.values(msgCount[i])) {
            return false;
        }
    }
  }