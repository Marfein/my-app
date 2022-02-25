let state =
{
    navPage:{
        friends:[
            {id: 1, name: 'biba'},
            {id: 2, name: 'boba'}
        ]
    },
    profilePage:{
        posts : [
            {id: 1, message: 'hi, fuck you', likecounts: 1, dislikecounts: 3},
            {id: 2, message: 'no, fuck you', likecounts: 5, dislikecounts: 6}
        ]
    },
    dialogsPage:{
        dialogs : [
            {id: 1, name: 'Troll'},
            {id: 2, name: 'Aguaman'},
            {id: 3, name: 'Greg'},
            {id: 4, name: 'Margaret'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'cool'},
            {id: 3, message: 'nice'},
            {id: 4, message: 'lol'}]
    }

};
export default state;