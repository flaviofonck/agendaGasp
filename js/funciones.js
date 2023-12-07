const HOJA = SpreadsheetApp.openById('1DOqIIGMbvXANkNTjmvhB9t366-oJrEFEeZqM4fTjIEE').getActiveSheet();

function doGet()
    {
        return HtmlService.createTemplateFromFile('html/web').evaluate().setTitle('Agenda Google App Script');
    }

function doPost(datos)
{
    insertarContacto(datos.parameter.nombre, datos.parameter.correo, datos.parameter.telefono);
    return HtmlService.createTemplateFromFile('html/web').evaluate().setTitle('Agenda Google App Script');
}


    function obtenerDatosHTML(archivo){
    return HtmlService.createHtmlOutputFromFile(archivo).getContent();
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, correo, telefono)
{
    HOJA.appendRow([nombre, correo, telefono]);
}