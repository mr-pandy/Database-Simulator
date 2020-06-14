const details = ()=>{

    // Remove Table Row through delete button
    const tableList = document.querySelector('#table-list');
    tableList.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const tdBtn = e.target.parentElement;
            tableList.removeChild(tdBtn);
        }
    })

    // Add Values from Forms to table
    const listForm = document.forms['list-form'];
    listForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const getName = document.querySelector('#name').value;
        const getEmail = document.querySelector('#email').value;
        const getNumber = document.querySelector('#number').value;
        
        // Created Row for form input
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${getName}</td>
        <td>${getEmail}</td>
        <td>${getNumber}</td>
        <td class='delete'>X</td>
        `;
        const alertMessage = document.querySelector('#alertMessages');
        // Check For some values
        if(getName === '' || getNumber === '' || getEmail === ''){
            alertMessage.innerHTML = `
                <p class="dangerAlert">Please Fill the blank spaces or face the wrath of teno</p>
            `;
            tableList.removeChild(row)
            setTimeout(() => {
                document.querySelector('#list-form').remove()    
                }, 3000);

        }else{
            alertMessage.innerHTML = `
                <p class="successAlert">Thanks for filling Up</p>
            `;
            tableList.appendChild(row)
        }
    }) 


};
details();