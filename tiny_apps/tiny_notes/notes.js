let notes = [];

const generateNotes = () => {
    const localStorage = window.localStorage;

    const notebook = document.createElement('div');
    notebook.id = 'notebook';
    notebook.style.border = `4px solid ${appList[0].color}`

    const options = document.getElementById('options')


    const formatNote = note => {
        let formattedNote = document.createElement('div');
        formattedNote.id = note.id;
        formattedNote.innerHTML = note.text;
        formattedNote.className = 'note';
        return formattedNote;
    }
    
    const renderNotes = () => {
        const saved = localStorage.getItem('notes');
        if (saved) {
            let savedNotes = JSON.parse(saved);
            savedNotes.forEach(note => {
                let formattedNote = formatNote(note);
                notebook.append(formattedNote);
            })
        }
    }
    
    const addNote = text => {
        const note = {
            text: text,
            id: Date.now(),
        };
        
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        let formattedNote = formatNote(note);
        notebook.append(formattedNote);
    }
    
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Your note here...';
    const button = document.createElement('button');
    button.type = 'submit';
    button.innerHTML = 'Submit';

    form.addEventListener('submit', e => {
        e.preventDefault();

        const text = input.value.trim();

        addNote(text);
        input.value = '';
    });

    form.append(input);
    form.append(button);

    display.append(notebook);
    options.append(form);


    renderNotes();
}