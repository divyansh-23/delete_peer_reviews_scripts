window.confirm = () => true;
var mx = 2856;
function solve(index) {
    setTimeout(() => {
        if (index == mx) return;
        const buttons = document.getElementsByClassName("delete_review_link");
        if (buttons.length == 0) return;
        buttons[0].click()
        solve(index+1);
    }, 3000);
}
solve(0);