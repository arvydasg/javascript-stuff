const breakTask = documnet.getElementById('break');
const gymTask = documnet.getElementById('gym');
const studyTask = documnet.getElementById('study');
const tvTask = documnet.getElementById('tv');
const friendsTask = documnet.getElementById('friends');
const workTask = documnet.getElementById('work');
const deselectBtn = documnet.getElementById('deselect');

// EVENT LISTENERS

function selectTask(task, color){
    task.classList.toggle('selected');
}
