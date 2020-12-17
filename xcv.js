function tst() {alert("Test"); removeEventListener('wheel', tst); addEventListener('wheel', '');
};
addEventListener('wheel', tst);
