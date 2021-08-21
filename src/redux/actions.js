export function addTest (data){
    return{
        type: 'ADD_TEST',
        data: data
    }
}

export function addMaterial (data){
    return{
        type: 'ADD_MATERIAL',
        data: data
    }
}

export function removeMaterial (data){
    return{
        type: 'REMOVE_MATERIAL',
        data: data
    }
}

export function modifyMaterial(data){
    return{
        type: 'MODIFY_MATERIAL',
        data: data
    }
}
