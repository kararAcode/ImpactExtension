

inject();



function inject() {


    window.onload = () => {
        


        setInterval(() => {
            
            let frame = window.frames[1].document;

        
            let commonEditor = $(".image-editor-outer", frame);
            let paintBrush = $(".fa-paint-brush", frame)[0];
            

            if (commonEditor !== null && paintBrush.length !== 0) {
                hideEditor();
            }

            
        }, 1000)
    }
    
        


}

function hideEditor() {
    let frame = window.frames[1].document;

    if (!checkTitle("Quest") && !checkTitle("Adventure")) {
        let editorBtn = $(".common-editor-toggle-item", frame)[0];
        editorBtn.remove();

        let editorScreen = $(".image-editor-outer", frame)[0];
        editorScreen.hidden = true;
    }
    

}

function checkTitle(text) {
    let title = $(".title-container h1");
    return title.text().slice(0, text.length) === text;
}