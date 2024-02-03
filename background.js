main();

async function main(){
    const [tab] = await chrome.tabs.query({currentWindow: true, active: true});
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["jquery.min.js"],
        world: "MAIN"
    });

    await chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        files: ["main.js"],
        world: "MAIN"        
    });
    
}

  