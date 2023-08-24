// class house {
//     constructor(expences, made) {
//         this.expences = expences;
//         this.made = made;
//     }
//     beauty(how) {
//         console.log(`barita ${this.made} sale ${this.expences} tk dia banalew dekhte ${how} `);
//     }
    
// }
// const house1 = new house(2000, 1000000);
// house1.beauty('awesome')

// option#32
class house {
    constructor(expences, made) {
        this.expences = expences;
        this.made = made;
    }
    beauty(how) {
        this.how = how
        console.log(`barita ${this.made} sale ${this.expences} tk dia banalew dekhte ${this.how} `);
    }

}
const house1 = new house(2000, 1000000);
house1.beauty('awesome')