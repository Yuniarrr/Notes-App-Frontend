import config from '@/config';

const createNewNote = async (note: { title: string; body: string }) => {
  try {
    const response = await fetch(`${config.API_HOST}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });

    if (!response.ok) {
      throw new Error('Failed to create new note');
    }

    const data: Notes = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error creating new note:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
  }
};

export default createNewNote;
