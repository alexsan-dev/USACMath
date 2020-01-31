// FIREBASE
import firebase from "../Keys/firebase";
import "firebase/database";

// BASE DE DATOS FIREBASE
const db = firebase.database();
const ref = db.ref("data");

// HOOK PARA OBTENER DATOS
export const getData = (callback: Function) => ref.once("value", (data: firebase.database.DataSnapshot) => callback(data))

// EFECTO RIPPLE PARA TODOS LOS BOTONES
export const useRipples = () => {

  // OBTENER TODAS LAS SUPERFICIES
  const surface: NodeListOf<HTMLElement> | null = document.querySelectorAll(".waves") as NodeListOf<HTMLElement>;

  // FUNCION DE EFECTO
  function ripple(el: HTMLElement, e: MouseEvent) {
    if (el && surface) {
      // PROPIEDADES INICALES DEL CIRCULO
      const circle: HTMLDivElement = document.createElement("div") as HTMLDivElement;
      const maxLarge: number = Math.max(el.clientWidth, el.clientHeight);
      const rectSurface: ClientRect = el.getBoundingClientRect();

      // FUNCION LOGARITMICA DEL TIEMPO
      const time: number = Math.log(maxLarge) / Math.log(Math.exp(1)) / 11;

      // APLICAR DIMENSIONES Y ESTILO AL CIRCULO
      circle.style.width = circle.style.height = maxLarge + "px";
      circle.style.left = e.clientX - rectSurface.left - maxLarge / 2 + "px";
      circle.style.top = e.clientY - rectSurface.top - maxLarge / 2 + "px";
      circle.classList.add("ripple");
      circle.style.animation = `ripple ${time}s ease-in`;

      // AGREGAR CIRCULO A DIVS CON LA CLASE WAVES-DARK
      if (el.classList.contains("waves-dark"))
        circle.classList.add("ripple-dark");
      el.appendChild(circle);

      // ELIMINAR CIRCULO LUEGO DE *TIME* SEGUNDOS
      setTimeout(() => el.removeChild(circle), time * 1000);
    }
  }

  // AGREGAR FUNCION RIPPLE A TODAS LAS SUPERFICIES Y VERIFICAR SI YA SE AGREGO ANTES
  for (let i = 0; i < surface.length; i++) {
    if (!surface[i].getAttribute("data-ripple")) {
      surface[i].setAttribute("data-ripple", "true");
      surface[i].addEventListener("click", (e: MouseEvent) => ripple(surface[i], e));
    }
  }
};

// MOSTRAR TOAST
export const showToast = (text: string) => {
  let div: HTMLDivElement = document.createElement("div") as HTMLDivElement;
  let span: HTMLDivElement = document.createElement("span") as HTMLDivElement;
  div.classList.add("toast");
  span.textContent = text;
  div.appendChild(span);
  document.body.appendChild(div);

  setTimeout(() => {
    div.style.transform = "translateY(0)";
  }, 10)

  setTimeout(() => {
    div.style.transform = "translateY(100%)";
  }, 5000);

  setTimeout(() => {
    document.body.removeChild(div);
  }, 5300);
}