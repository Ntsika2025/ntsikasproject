document.addEventListener("DOMContentLoaded", function(){
    const lyricsElement = document.getElementById("#lyrics");
    const lyrics= 'line 1';

    let currentIndex = 0;
    const lines = lyrics.split('/n');

    function showNextLine(){
        if(currentIndex < lines.length){
            const newLine = document.createElement('div');
            newLine.textContent = lines[currentIndex];
            lyricsElement.appendChild(newLine);
            currentIndex++;
        }else{
            clearInterval(lyricsInterval);
        }
    }

    const lyricsInterval = setInterval(showNextLine, 3000);
});