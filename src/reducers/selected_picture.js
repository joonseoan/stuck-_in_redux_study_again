

export default function (state = null, action) {

    if (action.type === 'ALL_BOOK') {

        console.log(action.book.title, "keeyyyyyyyy")

            switch (action.book.title) {

                case 'Perfect React.js': 
                
                    return action.imageBook.React;
                
                case 'Java Algorithms':

                    return action.imageBook.Java;

                case 'JavaScript Review' :

                    return action.imageBook.javaScript;
                
                case 'MongoDB' :

                    return action.imageBook.MongoDB;

                case 'mySQL':
                
                    return action.imageBook.mySQL;

                case 'PHP':
                
                    return action.imageBook.PHP;
                
                default :

                    return state;
            }
        
        } else { 
        
            return state;
    
        }
}


/*

    export default function (state = null, action) {

        switch(action.type) {
            case 'ALL_BOOK':
    
           //console.log(action.bookContent);
            return action.book;
           
            default : 
            return state;
        }
    
    
        // when the app does not do action, it is the current state.
        
    }
    

    // when the app does not do action, it is the current state.
    
}
*/