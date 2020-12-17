function tst() {alert("Test"); removeEventListener('wheel', tst); removeEventListener('wheel', tst);
};
addEventListener('wheel', tst);
