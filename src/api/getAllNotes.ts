import config from '@/config';

const getAllNotes = async () => {
  try {
    const response = await fetch(`${config.API_HOST}/notes`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: Notes[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
  }
};

export default getAllNotes;
