function showDescription(id) {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(desc) {
      desc.style.display = 'none';
    });
  
    var description = document.getElementById(id);
    if (description) {
      description.style.display = 'block';
    }
  }
  