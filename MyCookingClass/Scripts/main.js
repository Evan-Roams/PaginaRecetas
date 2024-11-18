// Clase Categoría
class Categoria {
    constructor(nombre, imagen, enlace) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.enlace = enlace;
    }

    // Método para crear un botón HTML
    crearBoton() {
        const boton = document.createElement("button");
        boton.textContent = this.nombre;
        boton.style.backgroundColor = "#f79e83";
        boton.style.color = "white";
        boton.style.padding = "10px 30px";
        boton.style.borderRadius = "10px";
        boton.style.fontSize = "1.8em";
        boton.style.cursor = "pointer";

        // Efecto hover dinámico
        boton.addEventListener("mouseover", () => {
            boton.style.backgroundColor = "#f36c44";
        });

        boton.addEventListener("mouseout", () => {
            boton.style.backgroundColor = "#f79e83";
        });

        return boton;
    }

    // Método para mostrar imagen asociada
    mostrarImagen(container) {
        container.innerHTML = ""; // Limpiar contenedor
        const img = document.createElement("img");
        img.src = this.imagen;
        img.alt = this.nombre;
        img.style.width = "95%";
        img.style.borderRadius = "5%";
        img.style.margin = "2.5%";
        container.appendChild(img);
    }
}

// Clase Administradora de Categorías
class AdministradorCategorias {
    constructor(containerBotones, containerImagen) {
        this.containerBotones = containerBotones;
        this.containerImagen = containerImagen;
        this.categorias = [];
    }

    // Método para agregar una nueva categoría
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }

    // Método para mostrar la imagen predeterminada
    mostrarPredeterminada() {
        const categoriaPredeterminada = this.categorias[0]; // Asignamos la primera categoría
        categoriaPredeterminada.mostrarImagen(this.containerImagen);
    }

    // Método para renderizar botones e imágenes
    renderizar() {
        this.containerBotones.innerHTML = "";
        this.containerImagen.innerHTML = "";

        this.categorias.forEach((categoria) => {
            const boton = categoria.crearBoton();

            // Mostrar imagen al hacer hover sobre el botón
            boton.addEventListener("mouseover", () => {
                categoria.mostrarImagen(this.containerImagen);
            });

            // Redirigir al hacer clic en el botón
            boton.addEventListener("click", () => {
                window.location.href = categoria.enlace;
            });

            this.containerBotones.appendChild(boton);
        });

        // Mostrar la imagen predeterminada (desayunos)
        this.mostrarPredeterminada();
    }
}

// Inicializar el sistema
document.addEventListener("DOMContentLoaded", () => {
    const contenedorBotones = document.getElementById("Categorias_Botones");
    const contenedorImagen = document.getElementById("Categorias_Imagen");

    // Crear instancia del administrador
    const adminCategorias = new AdministradorCategorias(contenedorBotones, contenedorImagen);

    // Agregar categorías con enlaces
    adminCategorias.agregarCategoria(new Categoria("Desayunos", "Resources/Img/Desayunos1.jpg", "desayunos.html"));
    adminCategorias.agregarCategoria(new Categoria("Platos Fuertes", "Resources/Img/PlatosFuertes1.png", "platosFuertes.html"));
    adminCategorias.agregarCategoria(new Categoria("Bebidas", "Resources/Img/Bebidas1.png", "bebidas.html"));
    adminCategorias.agregarCategoria(new Categoria("Postres", "Resources/Img/Postres1.png", "postres.html"));

    // Renderizar botones e imágenes
    adminCategorias.renderizar();

    //texto
});
