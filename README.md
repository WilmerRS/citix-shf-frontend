<div align="center">
    <h1><img src="https://github.com/WilmerRS/citix-shf-frontend/blob/main/src/assets/logo-x.png?raw=true" width="60"/></h1>
</div>

<h1 style="margin-top:10px;" align="center"> ➰
  <strong>  Citix </strong> ➿ 
</h1>

## 🐙 Project

Software web de tipo e-commerce. Construido usando `Angular 12` and `tailwindcss`.

## 🐗 Sobre la solución

Ha sido muy interesante construir este prototipo. Es muy bello el diseño del que se parte.
En mi solución, busque construir una arquitectura en la que la UI estuviera separada de la insfraestrutura de la API y la lógica de negocio.
Es por eso que en el módulo Core, creo tres capas que permite separar la lógica y la infraestructura muy bien. Por ejemplo, para 
obtener los datos de la categoría, es necesario un atributo adicional en la vista, pero la vista no tiene por qué encargarse eso.
Es por eso que construí un mapper y usando los métodos porpios de los Observables, mapeo el objeto a como los necesito, sin delegarle eso a la vista. 

Es posible que no les salga el icono del check en la card de categoría. La razón puede deberse a uso `filter` para oscurecer la tarjeta, y puede entrar en conflicto con el svg y no llegar a mostrarlo.

Busco mostrarles con este prototipo, mi conocimiento en frontend así como en arquitecturas de software, intentando escribir código lo más limpio posible.

## 🐋 To get started

1. Clone this repositoy: `https://github.com/WilmerRS/citix-shf-frontend.git`.
2. Enter project folder: `cd citix-shf-frontend`.
3. Install dependencies: `npm install`.
4. Run the project: `ng serve`.
5. Enjoy!
   
# 🐣 Screenshots

## Home page

<div align="center">
    <img src="https://github.com/WilmerRS/citix-shf-frontend/blob/main/src/assets/SC_home.png?raw=true" width="1000"/>
</div>

## Store detail page

<div align="center">
    <img src="https://github.com/WilmerRS/citix-shf-frontend/blob/main/src/assets/SC_detail_store.png?raw=true" width="1000"/>
</div>

## Login page

<div align="center">
    <img src="https://github.com/WilmerRS/citix-shf-frontend/blob/main/src/assets/SC_login.png?raw=true" width="1000"/>
</div>
