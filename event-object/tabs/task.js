let tabsEl = document.getElementsByClassName('tab');
let tabs = Array.from(tabsEl);
let tab__contentEl = document.getElementsByClassName('tab__content');
let tab__content = Array.from(tab__contentEl);
for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function() {
        let activeTab = tabs.findIndex((e) => e.className.includes('tab_active'));
        this.classList.add('tab_active');
        tabs[activeTab].classList.remove('tab_active');
        tab__content[activeTab].classList.remove('tab__content_active');
        tab__content[i].classList.add('tab__content_active');
    }
}