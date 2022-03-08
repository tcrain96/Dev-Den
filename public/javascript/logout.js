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



async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        sessionStorage.setItem('status', null)
        document.location.replace('/');
    } else {
        displayModal(response.statusText);
        alert(response.statusText);
    }
}
  
document.querySelector('#logout').addEventListener('click', logout);