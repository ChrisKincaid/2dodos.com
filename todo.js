
// Create a new 2Dodo
function add2Dodo() {
    const inputBox = document.querySelector('#inputBox');
    if (inputBox.value === '') {
      alert('Please enter a task');
      return;
    }
    const list = document.querySelector('#list');
    const newItem = document.createElement('li');
    newItem.classList.add('listItem');
    newItem.innerHTML = `
      <input type="checkbox" id="check">
      <input type="text" id="inputBox" value="${inputBox.value}">
      <button id="listItemRmvBtn" class="listItemRmvBtn" onclick="remove2Dodo()">Remove</button>
    `;
    list.appendChild(newItem);
    inputBox.value = '';
    saveList();
  }

  // Run add2Dodo() when the user presses enter key
  const inputBox = document.querySelector('#inputBox');
  inputBox.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      add2Dodo();
    }
  });
  
  // Remove 2Dodo
  function remove2Dodo() {
        const listItemRmvBtn = document.querySelectorAll('.listItemRmvBtn');
        listItemRmvBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.target.parentElement.remove();
            });
        });
        saveList();
    }

// clear all
function clearAll() {
    const list = document.querySelector('#list');
    list.innerHTML = '';
    saveList();
  }

// add list to locol storage
function saveList() {
    const list = document.querySelector('#list');
    localStorage.setItem('list', list.innerHTML);
  }

// get list from locol storage
function getList() {
    const list = document.querySelector('#list');
    list.innerHTML = localStorage.getItem('list');
  }

  getList();