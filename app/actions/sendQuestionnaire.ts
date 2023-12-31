'use server'
import nodemailer from 'nodemailer'


export async function sendQuestionnaire(formData: FormData) {
  try {

    const formDataEntryValues = Array.from(formData.values())

    const bufferAttachments = []
   
    for (const formDataEntryValue of formDataEntryValues) {
        if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
            const file = formDataEntryValue as unknown as Blob
            const buffer = Buffer.from(await file.arrayBuffer())
            bufferAttachments.push({
                buffer,
                name: file.name
            })
        }
    }

    const form = formData.get('form')
    const body = JSON.parse(form as string)
   


    let modificationStr = ''
    for(const modification in body.typeModification) {
        if (body.typeModification[modification].isChecked && modificationStr.length === 0) modificationStr += body.typeModification[modification].value
        if (body.typeModification[modification].isChecked && modificationStr.length !== 0) modificationStr += ' / ' + body.typeModification[modification].value
    }

    let elementStr = ''
    for(const element in body.elementAModifier) {
        if (body.elementAModifier[element].isChecked && elementStr.length === 0) elementStr += body.elementAModifier[element].value
        if (body.elementAModifier[element].isChecked && elementStr.length !== 0) elementStr += ' / ' + body.elementAModifier[element].value
    }

    let ambianceStr = ''
    for(const ambiance in body.ambianceSouhaiter) {
        if (body.ambianceSouhaiter[ambiance].isChecked && ambianceStr.length === 0) ambianceStr += body.ambianceSouhaiter[ambiance].value
        if (body.ambianceSouhaiter[ambiance].isChecked && ambianceStr.length !== 0) ambianceStr += ' / ' + body.ambianceSouhaiter[ambiance].value
    }

    const message = {
      from: body.email,
      to: process.env.RECEIVER_EMAIL_ADDR,
      subject: `Questionnaire site : ${body.nom} ${body.prenom} - ${body.societe}`,
      text: body.message,
      attachments: bufferAttachments.map((bufferAttachment, index) => ({
        filename: bufferAttachment.name,
        content: bufferAttachment.buffer
      })),
      html: `<div style="display: flex; flex-direction: column;">

      <h1 style="font-size: 2rem; color: cadetblue; text-align: center;">Réponse de questionnaire reçue</h1>
  
      <h2>Date : xxx</h2>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Informations personnelle</h3>
      
      <ul>
          <li>
              <span style="font-weight: bold;">Nom :</span> ${body.nom}
          </li>
          <li>
              <span style="font-weight: bold;">Prénom :</span> ${body.prenom}
          </li>
          <li>
              <span style="font-weight: bold;">Email :</span> ${body.email}
          </li>
          <li>
              <span style="font-weight: bold;">Téléphone :</span> ${body.telephone}
          </li>
      </ul>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Informations du projet</h3>
      
      <ul>
          <li>
              <span style="font-weight: bold;">Type de projet :</span> ${body.typeProjet}
          </li>
          <li>
              <span style="font-weight: bold;">Société :</span> ${body.societe}
          </li>
          <li>
              <span style="font-weight: bold;">Année de construction :</span> ${body.anneeConstruction}
          </li>
          <li>
              <span style="font-weight: bold;">Surface totale en m² :</span> ${body.surfaceTotale}
          </li>
          <li>
              <span style="font-weight: bold;">Nombre de pièces :</span> ${body.nbPiece}
          </li>
          <li>
              <span style="font-weight: bold;">Orientation du lieu :</span> ${body.orientation}
          </li>
      </ul>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Pièces à aménagée et/ou à décorer</h3>
      
      <p>
        ${body.descriptionPieces}
      </p>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Modification souhaitée</h3>
      
      <p>
        ${modificationStr} / ${body.autreModification}
      </p>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Éléments à modifier</h3>
      
      <p>
        ${elementStr} / ${body.autreElement}
      </p>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Ambiance(s) souhaitée(s)</h3>
      
      <p>
        ${ambianceStr} / ${body.autreAmbiance}
      </p>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Contraintes à prendre en compte</h3>
      
      <p>
        ${body.contraintes}
      </p>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Ce que le contact aime</h3>
      
      <p>
        ${body.aime}
      </p>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Ce que le contact n'aime pas</h3>
      
      <p>
        ${body.pasAime}
      </p>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Budget total</h3>
      
      <p>
        ${body.budget}
      </p>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Habitudes de vie</h3>
      
      <p>
        ${body.habitudesVie}
      </p>
  
      <h3 style="font-size: 1.2rem; color: cadetblue;">Prestation souhaitée</h3>
      
      <p>
        ${body.prestation}
      </p>
      
      
  </div>`,
    };
    
    let transporter = nodemailer.createTransport({
      host: "ssl0.ovh.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL_ADDR,
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    });

    const emailResult = await new Promise((resolve, reject) => {
      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      })
    });
    
    return 'ok'

  } catch (err) {
    console.log(err)
    return {error: err}
  }
}