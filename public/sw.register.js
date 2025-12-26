/** biome-ignore-all lint/suspicious/noConsole: initial load */
console.log(`
    
███████╗██╗  ██╗ █████╗ ████████╗███████╗██╗  ██╗
██╔════╝██║ ██╔╝██╔══██╗╚══██╔══╝██╔════╝╚██╗██╔╝
███████╗█████╔╝ ███████║   ██║   █████╗   ╚███╔╝ 
╚════██║██╔═██╗ ██╔══██║   ██║   ██╔══╝   ██╔██╗ 
███████║██║  ██╗██║  ██║   ██║   ██║     ██╔╝ ██╗
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝  ╚═╝
                                                 
Welcome to Skatfx...
`);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}
