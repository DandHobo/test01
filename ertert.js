function pop_rip() {
let scr_tag=document.createElement('script');
scr_tag.innerHTML="alert('I\`m work!')";
document.body.prepend(scr_tag);};
pop_rip;
