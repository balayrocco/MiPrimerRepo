documento.agregarEventListener(Contenido DOM cargado', función());
    constante elemento_circulo = documento.obtenerElementoPorId("2d");
    constante contexto = elemento_circulo.obtener contexto "2d";
    contexto.comenzarPath();
    contexto.arco(95,50,40,0.2*Matemáticas.P1);
    contexto.tanque();

    elemento_circulo.agregarEventListener('hacer clic', función()
    Saludar();
});



función Saludar() {
    alerta(Hiciste clic);
}
