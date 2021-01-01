import { Add_To_Do, COMPLETE, Delit_To_Do, Edit_To_Do, NOFILTER ,FILTER} from "../constants/ActionsTypes"

const initState={
    todos:[{id:0, text:"item 1", isDone:false},
           {id:1, text:"item 2", isDone:false}

]
,nofilter:true,
filter:false
}
const Reducer=(state=initState, action) =>{
    switch(action.type){
        case Add_To_Do:return {
         ...state,todos:[...state.todos,action.payload]
        }
        case Edit_To_Do:return{
            ...state,todos:state.todos.map(el=>el.id===action.payload.index? {...el,text:action.payload.editedText} :el )
        }
        case Delit_To_Do:return{
            ...state,todos:state.todos.filter(el=>el.id!=action.payload)
        }
        case COMPLETE:return{
            ...state,todos:state.todos.map(el=>el.id===action.payload? {...el,isDone:!el.isDone}: el) 
        }
        case NOFILTER:return {
        ...state,nofilter:!state.nofilter
        }
        case FILTER:return {
            ...state,filter:!state.filter
            }
        default:return state
    }
}
export default Reducer 