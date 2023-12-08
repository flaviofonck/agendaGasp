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

function insertarContacto(nombre,apellido, correo, telefono)
{
    HOJA.appendRow([nombre,apellido, correo, telefono]);
}

function borrarContacto(numfila){
    HOJA.deleteRow(numfila);
}

function modificarContacto(numfila,datosContacto){
    let celdas = HOJA.getRange('A'+numfila+':D'+numfila);
    celdas.setValues([[datosContacto.nombre,datosContacto.apellido,datosContacto.correo,datosContacto.telefono]]);
    /*HOJA.getRange(numfila,0).setValue(datosContacto.nombre);
    HOJA.getRange(numfila,1).setValue(datosContacto.apellido);
    HOJA.getRange(numfila,2).setValue(datosContacto.correo);
    HOJA.getRange(numfila,3).setValue(datosContacto.telefono);*/
}

