function doGet()
    {
        return HtmlService.createTemplateFromFile('html/web').evaluate().setTitle('Agenda Google App Script');
    }

function obtenerDatosHTML(archivo){
    return HtmlService.createHtmlOutputFromFile(archivo).getContent();
}

function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1DOqIIGMbvXANkNTjmvhB9t366-oJrEFEeZqM4fTjIEE').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}