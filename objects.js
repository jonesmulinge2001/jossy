
const student = {
    name: 'JStar Jossy',
    university: 'Chuka University',
    course: 'Web Development',
    year: 3,
    hasBursary: false,
    
    applyBursary: function(){
        if(!this.hasBursary){
            console.log(`${this.name} applied for bursary`)
            this.hasBursary = true;
        }
        else {
            console.log(`${this.name} already has a bursary`)
        }
    }
}
console.log(student.name)
student.applyBursary()
student.applyBursary()