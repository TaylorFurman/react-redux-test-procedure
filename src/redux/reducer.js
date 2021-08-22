import deepcopy from 'deepcopy';

let initialProcedure ={
    testProcedure:[
        {testId: "pH by Probe", testDescription: "Get the pH of a liquid via probe (1-6 acidic, 7 neutral, 8-14 basic)"},
        {testId: "Density by Hydrometer", testDescription: "Get the density of a liquid via hydrometer (Density of pure water at ambient conditions = 1.000g/mL)"},
    ]
}

function testProcedure(state, action){
    if (state === undefined){
        return initialProcedure;
    }
    console.log(action);
    let new_state = deepcopy(state);
    if (action.type === 'ADD_TEST'){
            new_state.testProcedure.push({
                testId: action.data.testId, 
                testDescription: action.data.testDescription, 
        });

    }else if (action.type === 'ADD_MATERIAL'){

    }else if (action.type === 'REMOVE_MATERIAL'){
        
    }
    else if (action.type === 'MODIFY_MATERIAL'){
        
    }

    //let new_state = deepcopy(state);
}

export default testProcedure;