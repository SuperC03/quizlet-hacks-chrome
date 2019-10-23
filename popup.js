const stop = time => {
    chrome.tabs.executeScript({
        // Extracted from https://github.com/jaeheonshim/quizlet-match-hack
        code: `document.getElementsByClassName("UIButton UIButton--hero")[0].click();
        setTimeout(function(){for(var F = setTimeout(";"), i = 0; i < F; i++) clearTimeout(i)}, ${time * 1000});`
    })
}

const button = document.getElementById('stop_button');
const input = document.getElementById('timer_input');

button.onclick = () => {
    stop(input.value);
}