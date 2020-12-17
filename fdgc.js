function tst() {alert("Test"); removeEventListener('wheel', tst); document.getElementById('elem').remove();
};
addEventListener('wheel', tst);
