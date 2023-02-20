//module.exports = 

//const employees =()=>{
//   return`<!DOCTYPE html>
// <html lang="en">

//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>My Team Profile</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />
//     </head>
//     <body>
//         <section class="hero is-info is-bold">
//             <div class="hero-body">
//                 <div class="container">
//                     <h1 class="title">My Badass Team</h1>
//                 </div>
//             </div>
//         </section>
//         <main class="m-6">
//             <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
//     ${render(employees)}
//             </div>
//         </main>
//     </body>
//     </html>
// `};


const renderManager = ({name, id, email, officeNumber}) => {
    return`<div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <i class="fas fa-mug-hot fa-3x"></i>
                </div>
                <div class="media-content">
                    <p class="title is-4">${name}</p>
                    <p class="subtitle is-6">Manager</p>
                </div>
            </div>
            <div class="content">
                <p><span class="has-text-weight-bold">ID:</span>${id}<br />
                <span class="has-text-weight-bold">Email:</span> <a href="mailto:Keanu.Reeves@email.com" class="has-text-info">${email}</a><br />
                <span class="has-text-weight-bold">Office Number:${officeNumber}</span></p>
            </div>
        </div>
    </div>
</div>

`};

const renderEngineer = ({name, id, email, github}) => {
    return`<div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <i class="fas fa-glasses fa-3x"></i>
                </div>
                <div class="media-content">
                    <p class="title is-4">${name}</p>
                    <p class="subtitle is-6">Engineer</p>
                </div>
            </div>

            <div class="content">
                <p><span class="has-text-weight-bold">ID:</span> ${id}<br />
                <span class="has-text-weight-bold">Email:</span> <a href="mailto:Johnny.Depp@email.com" class="has-text-info">${email}</a><br />
                <span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/Bucky24" target="_blank" class="has-text-info">${github}</a></p>
            </div>
        </div>
    </div>
</div>

`};

const renderIntern = ({name, id, email, school}) => {
    return`<div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <i class="fas fa-graduation-cap fa-3x"></i>
                </div>
                <div class="media-content">
                    <p class="title is-4">${name}</p>
                    <p class="subtitle is-6">Intern</p>
                </div>
            </div>

            <div class="content">
                <p><span class="has-text-weight-bold">ID:${id}</span> 003<br />
                <span class="has-text-weight-bold">Email:</span> <a href="mailto:Minii.Grace@email.com" class="has-text-info">${email}</a><br />
                <span class="has-text-weight-bold">School:${school}</span>  target="_blank" class="has-text-info">miniigrace</p>
            </div>
        </div>
    </div>
</div>

`};

module.exports =render = employees => {
  const html = [];

  html.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  const final= html.join("");

return`<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />
    </head>
    <body>
        <section class="hero is-info is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">My Badass Team</h1>
                </div>
            </div>
        </section>
        <main class="m-6">
            <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
     ${final}
            </div>
        </main>
    </body>
    </html>
`

};


