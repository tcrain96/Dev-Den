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


async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-body"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        displayModal(response.statusText);
        alert(response.statusText);
    }
}
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);