import config from '@/config';

const deleteNote = async (params: string | string[]) => {
  try {
    const response = await fetch(`${config.API_HOST}/notes/${params}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
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

export default deleteNote;
