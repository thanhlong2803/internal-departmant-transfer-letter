export class localStorageHelper {

    static getItem<T>(key: string): T {
        if (localStorage[key]) {
            return <T>JSON.parse(localStorage[key])
        } 
        return <T>JSON.parse("");      
    }
   
    static setItem(key: string , item : any){
        localStorage[key] = JSON.stringify(item);
    }

    static removeItem(key : string){
        localStorage.removeItem(key);
    } 
}