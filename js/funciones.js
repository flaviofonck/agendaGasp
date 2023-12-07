function doGet()
    {
        return HtmlService.createTemplateFromFile('html/web').evaluate().setTitle('Agenda Google App Script');
    }

function obtenerDatosHTML(archivo){
    return HtmlService.createHtmlOutputFromFile(archivo).getContent();
}