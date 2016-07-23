
export default class MyService {
    constructor(private http){
        
    }
    do(){
        console.log(this.http);
        console.log('my service do() called');
    }
    
    bar(){
        console.log('my service bar() called');
    }
}

MyService.$inject = ['$http'];