function goToPage(pageName) {
    let url;
    switch (pageName) {
        case 'perfumeria_masculina.html':
            url = 'perfumeria_masculina.html';
            break;
        case 'PerfumeriaFemenina.html':
            url = 'PerfumeriaFemenina.html';
            break;
        case 'PerfumeriaNinos.html':
            url = 'PerfumeriaNinos.html';
            break;
        case 'Tododia.html':
            url = 'Tododia.html';
            break;
        case 'Ekos.html':
            url = 'Ekos.html';
            break;
        case 'Desodorante.html':
            url = 'Desodorante.html';
            break;
        case 'Maquillaje.html':
            url = 'Maquillaje.html';
            break;
        case 'Cabellos.html':
            url = 'Cabellos.html';
            break;
        case 'Kit.html':
            url = 'Kit.html';
            break;
        default:
            url = 'index.html';
    }

    window.location.href = url;
}

