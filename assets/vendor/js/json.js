$.getJSON("public/data.json", function (data) {
    $.each(data, function (key, value) {
        $("#project1").append(
            '<div class="card">'+
                '<img class="card-img-top img-fluid" src="'+value.Project1.Imagen+'"/>'+
                '<div class="card-body bg-dark-blue text-center">'+
                    '<h3 class="card-title color-white"">'+value.Project1.Nombre+'</h3>'+
                    '<a class="color-blue btn btn-outline-info" target="_blank" href="'+value.Project1.Direccion+'" style="width:100%;"><i class="fas fa-link"></i></a>'+
                '</div>'+ 
            '</div>' 
            )
        $("#project2").append(
            '<div class="card" style="width: 100%;">'+
                '<img class="card-img-top img-fluid" src="'+value.Project2.Imagen+'"/>'+
                '<div class="card-body bg-dark-blue text-center">'+
                    '<h3 class="card-title color-white"">'+value.Project2.Nombre+'</h3>'+
                    '<a class="color-blue btn btn-outline-info" target="_blank" href="'+value.Project2.Direccion+'" style="width:100%;"><i class="fas fa-link"></i></a>'+
                '</div>'+ 
            '</div>' 
            )
        $("#project3").append(
            '<div class="card" style="width: 100%;">'+
                '<img class="card-img-top img-fluid" src="'+value.Project3.Imagen+'"/>'+
                '<div class="card-body bg-dark-blue text-center">'+
                    '<h3 class="card-title color-white">'+value.Project3.Nombre+'</h3>'+
                    '<a class="color-blue btn btn-outline-info" target="_blank" href="'+value.Project3.Direccion+'" style="width:100%;"><i class="fas fa-link"></i></a>'+
                '</div>'+ 
            '</div>' 
        )
    })
})