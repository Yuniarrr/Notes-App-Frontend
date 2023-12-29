import config from '@/config';

const getNoteById = async (params: string | string[]) => {
  try {
    const response = await fetch(`${config.API_HOST}/notes/${params}`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: Notes = await response.json();
    return {
      title: data.title,
      body: data.body,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
  }
};

export default getNoteById;
