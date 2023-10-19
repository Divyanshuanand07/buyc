function submitCarDetails() {
    const carImage = document.getElementById('car-image').value;
    const carTitle = document.getElementById('car-title').value;
    const carDescriptionItems = document.querySelectorAll('#car-description li input');
    
    const carDescription = [];
    carDescriptionItems.forEach(item => {
        const description = item.value.trim();
        if (description !== '') {
            carDescription.push(description);
        }
    });

   
    const carDetails = {
        image: carImage,
        title: carTitle,
        description: carDescription
    };


   alert("Detail have been entered successfully");
}
