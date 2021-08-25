export function addTest (data){
    return{
        type: 'ADD_TEST',
        data: data
    }
}



//None of the below are being used
export function addTestId (data){
    return{
        type: 'ADD_TEST_ID',
        data: data
    }
}

export function addTestDescription (data){
    return{
        type: 'ADD_TEST_DESCRIPTION',
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
