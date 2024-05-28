const tabs = document.querySelectorAll('.navtab');
const contents = document.querySelectorAll('.content');
const underline = document.querySelector('.underline');

function updateUnderline() {
  const activeTab = document.querySelector('.navtab.active');
  underline.style.width = `${activeTab.offsetWidth}px`;
  underline.style.left = `${activeTab.offsetLeft}px`;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    contents.forEach(content => {
      if (content.id === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    updateUnderline();
  });
});

window.addEventListener('resize', updateUnderline);
updateUnderline();


function navFunction(){
  
  var nav_height = document.getElementById("res-navtabs").offsetHeight;
  console.log(nav_height);
  if (nav_height <= 100){
    document.getElementById('res-navtabs').style.height = 'auto';
    document.getElementById('res-navtabs').style.transition = '0.5s';
    document.getElementById('res-nav-box').style.rotate = '90deg';
  }
  else{
    document.getElementById('res-navtabs').style.height = '40px';
    document.getElementById('res-navtabs').style.transition = '0.5s';
    document.getElementById('res-nav-box').style.rotate = '0deg';
  }

}
// function navFunctionclose(){
//   document.getElementById("res-navtabs").style.height = "40px"; 
// }