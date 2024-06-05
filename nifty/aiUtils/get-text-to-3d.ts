const API_KEY = "msy_TNW4cBN9aWnGpOKi4R2tk0NxM5irjkmH9X04"
const taskId = '018fe82f-4602-712b-b103-6cbaf0430c5c';
const headers = { Authorization: `Bearer ${API_KEY}` };

fetch(`https://api.meshy.ai/v2/text-to-3d/${taskId}`, { headers })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch data');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
