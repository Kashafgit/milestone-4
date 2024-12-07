// Get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
// handle form submission

form.addEventListener("submit", (event: Event) => {
    event.preventDefault()
    // collect input values

    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value
    // Generate the resume content dynamically

    const resumeHtml = `
    <h2><b> Editable Resume</b></h2>
    <h3> Personal Information </h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>phone:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}

    <h3>Experience</h3>
    <p contenteditable="true">${experience}

    <h3>Skills</h3>
    <p contenteditable="true">${skills}

    `;
    // display generated resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    }else{
        console.error("The resume display element is missing")
    }

})