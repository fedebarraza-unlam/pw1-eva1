$(document).ready(function(){
    $("#carrillo").click(function(){
        cerrarPopup();
        var hospital = "#carrilloPopup";
        mostrarPopup(hospital);
    });

    $("#agudos").click(function(){
        cerrarPopup();
        var hospital = "#agudosPopup";
        mostrarPopup(hospital);
    });

    $("#posadas").click(function(){
        cerrarPopup();
        var hospital = "#posadasPopup";
        mostrarPopup(hospital);
    });

    $(".cerrar").click(function(){
        cerrarPopup();
    });

});

function mostrarPopup(mostrar){
    $(mostrar).fadeIn();
}

function cerrarPopup(){
    $(".popup").fadeOut();
}