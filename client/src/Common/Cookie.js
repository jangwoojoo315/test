import Cookie from 'universal-cookie'

const cookies=new Cookie();
export const setCookie=(data)=>{
    console.log(data)
    return cookies.set('uri',data,{path:'/'})
}
export const getCookie=()=>{
    
    return cookies.get('uri')
}
export const removeCookie=()=>{
    return cookies.remove('uri')
}