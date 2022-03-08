const modal = document.querySelector('#error-modal');
const text = document.querySelector('#error-text')
const closeBtn = document.querySelector('#close-modal');

const hideModal = () => {
    console.log('working');
    modal.setAttribute('hidden', true);
};
const displayModal = error => {
    console.log('running');
    text.innerHTML = error;
    modal.removeAttribute('hidden')
    closeBtn.addEventListener('click', hideModal);
};



async function editFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        displayModal(response.statusText);
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);