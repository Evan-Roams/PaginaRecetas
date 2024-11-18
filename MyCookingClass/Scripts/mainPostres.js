// Función para cargar recetas
async function cargarRecetas() {
    const recetasContainer = document.getElementById("Recetas_Listado");

    try {
        // Lista de archivos JSON
        const archivosRecetas = [
            "recetas/Postres/fresasConCrema.json",
            "recetas/Postres/milhoja.json"
        ];

        // Procesar cada archivo
        for (const archivo of archivosRecetas) {
            const respuesta = await fetch(archivo);
            const receta = await respuesta.json();

            // Crear tarjeta para la receta
            const recetaCard = document.createElement("div");
            recetaCard.className = "receta-card";
            recetaCard.style.border = "1px solid #ccc";
            recetaCard.style.margin = "10px";
            recetaCard.style.padding = "10px";
            recetaCard.style.borderRadius = "8px";
            recetaCard.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
            recetaCard.style.cursor = "pointer";

            // Crear imagen de la receta con tamaño fijo
            const recetaImage = document.createElement("img");
            recetaImage.src = receta.imagen;
            recetaImage.alt = receta.titulo;
            recetaImage.style.width = "300px";  // Ancho fijo
            recetaImage.style.height = "200px"; // Alto fijo
            recetaImage.style.objectFit = "cover"; // Ajusta la imagen para cubrir el espacio sin distorsionar
            recetaImage.style.borderRadius = "8px"; // Esquinas redondeadas


            // Mostrar título, descripción e imagen
            recetaCard.innerHTML = `
                <img src="${receta.imagen}" alt="${receta.titulo}" style="width: 100%; border-radius: 8px;">
                <h3>${receta.titulo}</h3>
                <p>${receta.descripcion}</p>
            `;

            // Redirigir a una página de detalle al hacer clic
            recetaCard.addEventListener("click", () => {
                window.location.href = `detalle.html?receta=${archivo}`;
            });

            recetasContainer.appendChild(recetaCard);
        }
    } catch (error) {
        console.error("Error cargando recetas:", error);
    }
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarRecetas);
