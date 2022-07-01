let labels = document.querySelectorAll('.control-form label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span>${letter}</span>`)
        .join('')
})