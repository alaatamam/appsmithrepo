export default {
    JSONForm1onSubmit (UserID) {
        const url = `http://web:4000/user?UserID=${UserID}`;
        return fetch(url, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
    }
}
