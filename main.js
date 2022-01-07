import {Oso, Lobo, Leon, Serpiente, Aguila} from './clases.js'

arrayAnimales.push(animal);
DibAnimales(arrayAnimales);



function DibAnimales (animales) {

    $("#Animales").html("");
    
    for (let i = 0; i < animales.length; i++ ) {
        let animal = animales[i];
        $("#animales").append(`
            <div class="card" style="margin-right: 20px; width: 200px; margin-left: 20px;">
            <img src="${animal.img}" class="card-img-top" alt="...">
                <div class="card-body">
        
                <button onclick="sonar(${i})">Sonar</button>
            </div>
        `)
    }
}


$('#btnRegistrar').on('click', function () {

    const selectAnimal = $("#animal").val();
    // capturar la edad y los comentarios
    const edad = $("#edad").val();
    const comentarios = $("#comentarios").val();

    const errores = []




    /*
    <div class="form-group">
              <label for="exampleInputPassword1">Años de edad estimados:</label>
              <select class="form-control bg-dark text-white" id="edad">
                <option disabled selected>Seleccione un rango de años</option>

                <option value="0 - 1 años">0 - 1 años</option>
                <option value="1 - 3 años">1 - 3 años</option>
                <option value="3 - 5 años">3 - 5 años</option>
                <option value="5 - 8 años">5 - 8 años</option>
                <option value="8 - 10 años">8 - 10 años</option>
                <option value="Más de 10 años">Más de 10 años</option>
              </select>
            </div>



    */
    
    alert(selectAnimal);
    
    if (selectAnimal == "Oso") {
        animal = new Oso(selectAnimal, edad_animal, comentario);
    
    }else if (selectAnimal == "Lobo") {
        animal = new Lobo(selectAnimal, edad_animal, comentario);
    
    }

})



