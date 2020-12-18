function tst() {alert("Test"); document.onwheel=null;};
if (!document.onwheel) {document.onwheel=tst};
