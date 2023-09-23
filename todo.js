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
  }

    function remove2Dodo() {
        const listItemRmvBtn = document.querySelectorAll('.listItemRmvBtn');
        listItemRmvBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.target.parentElement.remove();
            });
        });
    }



//   <!-- Check box -->
//   <input type="checkbox" id="check">
//   <input type="text" id="inputBox" placeholder="This is a 2Dodo">
//   <button class="listItemRmvBtn">Remove</button>
