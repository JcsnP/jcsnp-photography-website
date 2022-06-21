const applyFilter = () => {
    let filterList = document.getElementById('filter').value;
    const img = document.querySelectorAll('.img-fluid');
    let filterSelected;


    if(filterList === 'default') {
        filterSelected = '';
    } else if(filterList === 'contrast') {
        filterSelected = 'contrast(160%)';
    } else if(filterList === 'grayscale') {
        filterSelected = 'grayscale(100%)';
    } else if(filterList === 'sepia') {
        filterSelected = 'sepia(50%)';
    } else if(filterList === 'saturate') {
        filterSelected = 'saturate(3)';
    }

    img.forEach(el => el.style.filter = filterSelected);
    // img.style.filter = filterSelected;
}