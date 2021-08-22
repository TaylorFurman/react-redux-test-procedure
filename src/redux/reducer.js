import deepcopy from 'deepcopy';

let initialProcedure ={
    testProcedure:[
        {testId: "", testProcedureUpdate: false},
        {testDescription: "", testProcedureUpdate: false},
        {materialsAndEquipment: "", testProcedureUpdate: false},
        {testMethod: "", testProcedureUpdate: false},
        {safetyPrecautions: "", testProcedureUpdate: false},
    ]
}

function testProcedure(state, action){
    if (state === undefined){
        return initialProcedure;
    }
    console.log(action);
    let new_state = deepcopy(state);
    if (action.type === 'ADD_TEST'){
            new_state.testProcedure.push({testId: action.data.testId, 
            testDescription: action.data.testDescription, 
            testProcedureUpdate: false
        });

    }else if (action.type === 'ADD_MATERIAL'){

    }else if (action.type === 'REMOVE_MATERIAL'){
        
    }
    else if (action.type === 'MODIFY_MATERIAL'){
        
    }

    //let new_state = deepcopy(state);
}

export default testProcedure;