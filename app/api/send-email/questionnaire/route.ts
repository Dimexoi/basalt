import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  try {

    const formData = await req.formData()

    const form = formData.get('form')
    const body = JSON.parse(form as string)

    let modificationStr = ''
    for(const modification in body.typeModification) {
      if (modification) {
        if (body.typeModification[modification].isChecked && modificationStr.length === 0) modificationStr += body.typeModification[modification].value
        if (body.typeModification[modification].isChecked && modificationStr.length !== 0) modificationStr += ' / ' + body.typeModification[modification].value
      }
    }

    let elementStr = ''
    for(const element in body.elementAModifier) {
      if(element) {
        if (body.elementAModifier[element].isChecked && elementStr.length === 0) elementStr += body.elementAModifier[element].value
        if (body.elementAModifier[element].isChecked && elementStr.length !== 0) elementStr += ' / ' + body.elementAModifier[element].value
      }
    }

    let ambianceStr = ''
    for(const ambiance in body.ambianceSouhaiter) {
      if (ambiance) {
        if (body.ambianceSouhaiter[ambiance].isChecked && ambianceStr.length === 0) ambianceStr += body.ambianceSouhaiter[ambiance].value
        if (body.ambianceSouhaiter[ambiance].isChecked && ambianceStr.length !== 0) ambianceStr += ' / ' + body.ambianceSouhaiter[ambiance].value
      }
    }

    const formDataEntryValues = Array.from(formData.values())

    const bufferAttachments = []
    const uploadedFiles: File[] = []
   
    for (const formDataEntryValue of formDataEntryValues) {
        if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
          uploadedFiles.push(formDataEntryValue)
            const file = formDataEntryValue as unknown as Blob
            const buffer = Buffer.from(await file.arrayBuffer())
            bufferAttachments.push({
                buffer,
                name: file.name
            })
        }
    }

    const fileAndCategory: {file: File, category: string}[] = []

    uploadedFiles.forEach((file, index) => fileAndCategory.push({
      file,
      category: formData.get(`category-${index}`) as string
    }))

    const results = await prisma.questionnaire.create({
      data: {
        nom : body.nom,
        prenom : body.prenom,
        email : body.email,
        telephone : body.telephone,
        typeProjet : body.typeProjet,
        societe : body.societe,
        anneeConstruction  : body.anneeConstruction,
        surfaceTotale  : body.surfaceTotale,
        nbPiece  : body.nbPiece,
        orientation : body.orientation,
        descriptionPieces : body.descriptionPieces,
        typeModification : modificationStr,
        autreModification : body.autreModification,
        elementAModifier : elementStr,
        autreElement : body.autreElement,
        ambianceSouhaiter : ambianceStr,
        autreAmbiance : body.autreAmbiance,
        contraintes : body.contraintes,
        aime : body.aime,
        pasAime : body.pasAime,
        budget : body.budget,
        habitudesVie : body.habitudesVie,
        prestation : body.prestation,
        files: {
          createMany: {
            data: fileAndCategory.map((objFile: {file: File, category: string}) => (
              {
                category: objFile.category,
                link: `https://dimexoi-basalt.s3.eu-west-3.amazonaws.com/${objFile.file.name}`
              }
            ))
          }
        }
      }
    })

    const message = {
      from: body.email,
      to: process.env.RECEIVER_EMAIL_ADDR,
      subject: `Questionnaire site : ${body.nom} ${body.prenom} - ${body.societe}`,
      text: body.message,
      attachments: uploadedFiles.map((file, index) => ({
        filename: file.name,
        href: `https://dimexoi-basalt.s3.eu-west-3.amazonaws.com/${file.name}`
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
    
    return NextResponse.json({
      message: 'emailResult'
  });

  } catch (err) {
    console.log(err)
    return NextResponse.json({error: err})
  }
}