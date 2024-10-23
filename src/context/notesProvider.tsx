import { createContext, ReactNode, useEffect, useState } from 'react'
export const NotesContext = createContext<INotesContext>({} as INotesContext)
import words from '../assets/lang'
import { INotesContext, ITodo, LangType } from '../types'

interface INotesProviderProps {
  children: ReactNode
}

const NotesProvider = (props: INotesProviderProps) => {
  const { children } = props
  // console.log(props);
  const [notes, setNotes] = useState<ITodo[]>([
    {
      id: 1,
      title: 'JavaScript',
      date: '07.03.2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 2,
      title: 'React',
      date: '07.03.2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 3,
      title: 'Vue',
      date: '07.03.2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
  ])
  const [hideModal, setHideModal] = useState(true);
  const [currentId, setCurrentId] = useState(0);
  const [noteInfo, setNoteInfo] = useState<ITodo | null>(null);
  const [search, setSearch] = useState('')
  const [lang, setLang] = useState<LangType>(LangType.ru)

  useEffect(()=>{
    let localNotes = localStorage.getItem('notes')
    if(localNotes) {
      const b = JSON.parse(localNotes)
      setNotes(b)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes));
    let last = notes.length - 1;
    const id = last >= 0 ? notes[last].id : 0;
    setCurrentId(id);
  }, [notes])

  const addNote = (obj: ITodo)=>{
    const newNotes = [...notes, obj];
    setNotes(newNotes);
    setCurrentId(obj.id)
  }

  const delNote = (id: number)=>{
    let newNotes = notes.filter((elem) => elem.id != id);
    setNotes(newNotes)
  }

  const editNote = (id: number)=>{
    let note = notes.find((elem)=> elem.id == id);
    if(note){
      setNoteInfo(note);
      setHideModal(false);
    }
  }

  const changeNote =(note: ITodo)=>{
    let newNotes = notes.map((elem)=>{
      if (elem.id == note.id) {
        elem.date = note.date;
        elem.desc = note.desc;
        elem.title = note.title;
      }
      return elem
    })
    setNotes(newNotes);
    setNoteInfo(null);
  }

  const closeModal = ()=>{
    setHideModal(true);
    setNoteInfo(null);
  }

  return (
    <NotesContext.Provider value={ 
      { notes, 
        hideModal, setHideModal, 
        currentId, 
        addNote, delNote, editNote, 
        noteInfo, changeNote, closeModal,
        search, setSearch,
        words, lang, setLang
      } 
    }>
      {children}
    </NotesContext.Provider>
  )
}

export default NotesProvider