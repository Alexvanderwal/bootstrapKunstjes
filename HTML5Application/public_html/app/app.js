(function()
{
    // Applicatie
    addScript('app/bootstrap.js');
    addScript('app/routes.js');
    // Controllers
    addScript('app/controllers/HeaderController.js');
    addScript('app/controllers/AppController.js');
    addScript('app/controllers/HomeController.js');
    addScript('app/controllers/OverviewController.js');
    
    function addScript(url)
    {
        document.write('<script type="text/javascript" src="' + url + '"></script>');
    }
})();
