/**
 
 * "reducers" has only 2 steps
 * There are 2 steps of reducer.
 * 1) Creating reducer like below.
 * 2) Wiring it up into Application by creating index.js.
 
 */

// import * as types from '../actions/action_types';

// It is step 1.
export default function() {

    return [

        { title: 'Perfect React.js', pages: 39, desc: "It is still interesting" },
        { title: 'Java Algorithms', pages: 100, desc: "It is essence of all the programming languages"},
        { title: 'JavaScript Review', pages: 234, desc: "It is necessary to me" },
        { title: 'MongoDB', pages: 222, desc: "I want to study this."}
   
    ]

}



// It is step 2
/*
export default function Books(state = initialState, action) {

    switch(action.type) {
        case types.ALL_BOOK:
        return state;

        default : 
        return state;
    }


    // when the app does not do action, it is the current state.
    
}
*/

/*
export default  function counter(state = initialState, action) {

    switch (action.type) {
        case types.INCREMENT:
        
        // 1)
        // return ({ number: state.number + 1 });

        // 2)
        // spread : when we are usinb multi object properites
        return ( { ...state, number : state.number + 1 })

        // 3) even it is ok. (object of object)
        
        // return ({ 
        //    ...state,
        //    number : state.number + 1,
        //    dummyNumber: {...state.dummyNumber, a : 0 }
        // });
        

        case types.DECREMENT:
        return ( { ...state, number : state.number - 1 } );

        // when default, it delivers the existing state so far.
        default : 
        return state;
    }

}
*/


/*
export default function() {

    return [ 

      { title: 'Perfect React.js', pages: 39 },
      { title: 'Java Algorithms', pages:  100},
      { title: 'JavaScript Review', pages: 234 },
      { title: 'MongoDB', pages: 222 }

    ]

}
*/

/*
// A another way of step1
const initialState = {

books: [ 
{ title: 'Perfect React.js' },
{ title: 'Java Algorithms' },
{ title: 'JavaScript Review' },
{ title: 'MongoDB' }
]

}

*/


// importing the defined value. Do not change the value in "Action_types"
// import * as types from '../actions/Action_Types';

// making the beginning state
/*
const initialState = {

    number : 0,
    dummy : 'dummy',
    dumbNumber : {
        // object of object and spread sysntax.
        a : 0,
        b : 1,
        c : 3
    }

};
*/

// if state is undefined ES5
// 1)
/*
export default function counter(state, action) {


    if (typeof state === 'undefined') {

        return initialState;

    }
} */

// if state is undefined ES5
// 2)
// EX6 default argument syntax
// "state = initialState" if state is undefined ES5, use initialState

// action paramerter : it will receive action data from ../actions/index.js

    
    


