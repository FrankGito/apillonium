const API_KEY = "msy_TNW4cBN9aWnGpOKi4R2tk0NxM5irjkmH9X04"
const headers = { Authorization: `Bearer ${API_KEY}` };
const payload = {
  mode: 'preview',
  prompt: 'King Kong',
  art_style: 'cartoon',
  negative_prompt: 'low quality, low resolution, low poly, ugly',
};

fetch('https://api.meshy.ai/v2/text-to-3d', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    ...headers
  },
  body: JSON.stringify(payload)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
