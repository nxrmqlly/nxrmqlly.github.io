const xObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('active-x');
        } else {
            entry.target.classList.remove('active-x');
        }
    })
})

const yObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('active-y');
        } else {
            entry.target.classList.remove('active-y');
        }
    })
})

const xHiddenElements = document.querySelectorAll('.hidden-x');
const yHiddenElements = document.querySelectorAll('.hidden-y');

xHiddenElements.forEach((element) => {
    xObserver.observe(element);
})

yHiddenElements.forEach((element) => {
    yObserver.observe(element);
})

const themeIcon = document.querySelector('#theme-icon');

themeIcon.onclick = () => {
    document.body.classList.toggle('ui-light-theme');
    if (document.body.classList.contains('ui-light-theme')) {
        themeIcon.innerHTML = '💡';
    } else {
        themeIcon.innerHTML = '🌙';
    }
}
