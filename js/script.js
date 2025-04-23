const colorMap = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
  Yellow: 'yellow',
  Purple: 'purple',
  Orange: 'orange',
  Pink: 'pink',
  Brown: 'brown',
  Black: 'black'
};

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function(e) {
    if (!box.classList.contains('expanded')) {
      document.querySelectorAll('.box').forEach(b => b.classList.remove('expanded'));
      box.classList.add('expanded');
    }
  });

  const colorSelect = box.querySelector('select[id^="color"]');
  const sizeSelect = box.querySelector('select[id^="size"]');

  function checkSelections() {
    if (colorSelect.value && sizeSelect.value) {
      box.classList.remove('expanded');
    }
  }

  function updateBoxOutlineColor() {
    const selectedColor = colorMap[colorSelect.value];
    if (selectedColor) {
      box.style.borderColor = selectedColor;
    }
    checkSelections();
  }

  function updateBoxSize() {
    const size = sizeSelect.value;
    if (size === 'Small') {
      box.style.height = '100px';
    } else if (size === 'Medium') {
      box.style.height = '200px';
    } else if (size === 'Large') {
      box.style.height = '300px';
    }
    checkSelections();
  }

  colorSelect.addEventListener('change', updateBoxOutlineColor);
  sizeSelect.addEventListener('change', updateBoxSize);
});