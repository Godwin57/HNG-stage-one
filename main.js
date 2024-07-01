// Handling display of time ad day
const dayNode = document.getElementById('dayNode');
const timeNode = document.getElementById('timeNode');

function getCurrentTimeAndDay() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hours = now.getUTCHours(), minutes = now.getUTCMinutes(), seconds = now.getUTCSeconds();
    const currentDay = days[now.getUTCDay()];
    const timeString = `${hours} : ${minutes} : ${seconds}`
    return { currentDay, timeString };
}

setInterval(() => {
    dayNode.textContent = `${getCurrentTimeAndDay().currentDay}`;
    timeNode.textContent = `${getCurrentTimeAndDay().timeString}`;
}, 1000)

dayNode.textContent = `${getCurrentTimeAndDay().currentDay}`;
timeNode.textContent = `${getCurrentTimeAndDay().timeString}`;

// Hanlde mobile sidebar
const menu = document.getElementById('menu');
const mobileSideBar = document.getElementById('mobile-sidebar');
const closeMenu = document.getElementById('close-menu');

menu.addEventListener('click', e => {
    mobileSideBar.style.display = "flex"
    menu.style.display = "none"
});

closeMenu.addEventListener("click", e => {
    mobileSideBar.style.display = "none";
    menu.style.display = "block";
});