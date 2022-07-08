/*Random numbers are just numbers generated in such a way that
a human mind cannot connect them to be in a series when seen, these numbers can also be called psuedo random numbers*/

function generateSeed(){
    const initDate = new Date("December 17, 1995 03:24:00");
    const present = new Date();
    /* '~~' is used to ensure integer division */ 
    let seed = abs(~~((present.getTime()-initDate.getTime())/present.getMilliseconds()));
    return seed;
    // console.log(seed);
}



