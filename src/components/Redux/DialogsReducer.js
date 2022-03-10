const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE='SEND_MESSAGE'
let initialState ={
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
        {id: 4, message: 'lol'}],
    newMessageBody:""
};
const dialogsReducer = (state=initialState,action) =>
{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                 newMessageBody : action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id:6, message: body}]
            };

            default: return state;

    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body});
export default dialogsReducer;