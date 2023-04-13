// Method 1
function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function() {
    alert('I was clicked!');
  });
}
// Method 2
function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}


input.addEventListener('click', clickAlert
)}


