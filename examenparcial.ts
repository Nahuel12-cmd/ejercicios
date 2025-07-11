const formularios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan.perez@email.com",
    telefono: "011-4567-8901",
    edad: 25,
    mensaje: "Hola, me interesa obtener más información sobre sus servicios. Gracias."
  },
  {
    id: 2,
    nombre: "Ana",
    email: "ana@test",
    telefono: "123",
    edad: 15,
    mensaje: "Hola"
  },
  {
    id: 3,
    nombre: "",
    email: "",
    telefono: "",
    edad: 0,
    mensaje: ""
  },
  {
    id: 4,
    nombre: "María José García",
    email: "maria.garcia@empresa.com.ar",
    telefono: "011 1234 5678",
    edad: 35,
    mensaje: "Me gustaría recibir información sobre sus productos disponibles en la región."
  }
];

function validarFormulario(formulario) {
  console.log("=== VALIDADOR DE FORMULARIO DE CONTACTO ===");
  console.log(`\nValidando formulario ID ${formulario.id}...`);

  const errores = [];
  const camposValidos = [];

  if (!formulario.nombre || formulario.nombre.length < 2 || formulario.nombre.length > 50 || /[^a-zA-ZÀ-ſ\s]/.test(formulario.nombre)) {
    errores.push("❌ Error en nombre: Debe tener entre 2 y 50 caracteres y solo letras, espacios o acentos.");
  } else {
    camposValidos.push("✅ Campo nombre válido");
  }

  if (!formulario.email || formulario.email.length > 100 || !/^\S+@\S+\.\S+$/.test(formulario.email)) {
    errores.push("❌ Error en email: El formato del email es inválido.");
  } else {
    camposValidos.push("✅ Campo email válido");
  }

  const telefonoLimpio = formulario.telefono.replace(/[-\s]/g, "");
  if (!formulario.telefono || !/^[\d\s-]+$/.test(formulario.telefono) || telefonoLimpio.length < 8 || telefonoLimpio.length > 15) {
    errores.push("❌ Error en teléfono: Debe tener entre 8 y 15 dígitos (sin contar espacios o guiones).");
  } else {
    camposValidos.push("✅ Campo teléfono válido");
  }

  if (typeof formulario.edad !== "number" || formulario.edad < 16 || formulario.edad > 99) {
    errores.push("❌ Error en edad: La edad debe estar entre 16 y 99 años.");
  } else {
    camposValidos.push("✅ Campo edad válido");
  }

  if (!formulario.mensaje || formulario.mensaje.length < 10 || formulario.mensaje.length > 500 || !/[a-zA-Z]/.test(formulario.mensaje)) {
    errores.push("❌ Error en mensaje: El mensaje debe tener entre 10 y 500 caracteres y contener letras.");
  } else {
    camposValidos.push("✅ Campo mensaje válido");
  }

  console.log("\nResultados por campo:");
  camposValidos.forEach(c => console.log(c));
  errores.forEach(e => console.log(e));

  console.log("\nResultado Final del Formulario:");
  if (errores.length === 0) {
    console.log("✅ ¡FORMULARIO VÁLIDO! Todos los campos son correctos.");
  } else {
    console.log("⚠️ FORMULARIO INCOMPLETO. Corrija los siguientes errores:");
    errores.forEach(e => console.log("- " + e.replace("❌ ", "")));
  }
  console.log("\n-----------------------------------\n");
}

formularios.forEach(validarFormulario);
