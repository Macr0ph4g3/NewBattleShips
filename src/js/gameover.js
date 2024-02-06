function showGameOver(){

    // Create and place overlay
    const body = document.querySelectorAll('body');
    console.log('GAME OVER')
    const overlay = document.createElement('div');
    overlay.classList.add('GameOverScreen');
    body[0].appendChild(overlay)

    // Create textbox over Overlay

    const endText = document.createElement('div');
    endText.classList.add('EndText')
    const content = document.createTextNode('GAME OVER')
    endText.appendChild(content)
    overlay.appendChild(endText)




}

export { showGameOver }