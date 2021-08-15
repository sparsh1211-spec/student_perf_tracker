import { Entity } from "../models/Entity";

export interface EntityState<T extends Entity = Entity> {
    byId: {
        [id: number]: T;
    }
    selectedId?: number;
    loadingOne:boolean;
    loadingList:boolean;
    errorOne?:string;

}

 export const initialEntityState={
    byId:{},
    loadingOne:false,
    loadingList:false,

}

export const getIds = (entities: Entity[]) => {
    return entities.map((e) => e.id);
}

// export const addOne = (state: EntityState, entity: Entity) => {
// return { ...state, [entity.id]: entity };
// };


export const addOne = (state: EntityState, entity: Entity) => {
    return { ...state, byId: { ...state.byId, [entity.id]: entity } };
};


export const select = (state: EntityState, id: number) => (
    {
        ...state,
        selectedId: id,
        loadingOne:true,
    }
)

export const setErrorForOne=(state:EntityState,id:number,msg:string)=>{
    if(state.selectedId!==id){
        return state;
    }
    return {...state,errorOne:msg};
}
export const addMany = (state: EntityState, entities: Entity[]) => {
    // const groups = action.payload.groups as Group[]
    // const ids = entities.map((e) => e.id);

    if (entities.length === 0) {
        return state;
    }

    const entityMap = entities.reduce((prev, entity) => {
        return { ...prev, [entity.id]: entity };
    }, {});

    return {
        ...state,
        byId: { ...state.byId, ...entityMap }
    };
};



