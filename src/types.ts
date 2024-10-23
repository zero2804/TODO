import { ILang } from "./assets/lang-type"

export interface ITodo {
    id: number,
    title: string,
    date: string,
    desc: string
}

export enum LangType {
    ru = 'ru',
    uz = 'uz'
}

export interface INotesContext { 
    notes: ITodo[], 
    hideModal: boolean, 
    setHideModal: (a: boolean)=>void, 
    currentId: number, 
    addNote: (obj: ITodo) => void, 
    delNote: (id: number) => void, 
    editNote: (id: number) => void, 
    noteInfo: ITodo | null, 
    changeNote: (note: ITodo) => void, 
    closeModal: () => void,
    search: string, 
    setSearch: (a: string) => void,
    words: ILang, 
    lang: LangType, 
    setLang: (a: LangType)=>void
} 