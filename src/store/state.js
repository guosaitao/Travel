let defaultCity="上海"
debugger
try {
    if(localStorage.city){
        defaultCity=localStorage.city
    }
} catch (e) {}
export default {
    city:defaultCity
}