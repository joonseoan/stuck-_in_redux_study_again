

export default function (state = null, action) {

    console.log(action, "   action")

    switch(action.type) {
        case 'ALL_BOOK':

       //console.log(action.bookContent);
        return action.book;
       
        default : 
        return state;
    }


    // when the app does not do action, it is the current state.
    
}
