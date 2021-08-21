import deepcopy from 'deepcopy';

let initialProcedure ={
    testProcedure:[
        {testId: ""},
        {testDescription: ""},
        {materialsAndEquipment: ""},
        {testMethod: ""},
        {safetyPrecautions: ""},
    ]
}

function testProcedure(state, action){
    if (state === undefined){
        return initialProcedure;
    }
    console.log(action);
    let new_state = deepcopy(state);
    if (action.type === 'ADD_TEST'){

    }else if (action.type === 'ADD_MATERIAL'){

    }else if (action.type === 'REMOVE_MATERIAL'){
        
    }
    else if (action.type === 'MODIFY_MATERIAL'){
        
    }

    //let new_state = deepcopy(state);
}

export default testProcedure;