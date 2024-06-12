// Sample data
const items = [
    { name: 'Apple', type: 'fruit' },
    { name: 'Banana', type: 'fruit' },
    { name: 'Carrot', type: 'vegetable' },
    { name: 'Lettuce', type: 'vegetable' },
    { name: 'Orange', type: 'fruit' },
];

// Function to display items based on selected filter
function filterItems() {
    const filterType = document.getElementById('filterType').value;
    const itemList = document.getElementById('itemList');
    
    // Clear current items
    itemList.innerHTML = '';

    // Loop through items and display based on filter
    for (const item of items) {
        if (filterType === 'all' || item.type === filterType) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.textContent = item.name;
            itemList.appendChild(itemDiv);
        }
    }
}