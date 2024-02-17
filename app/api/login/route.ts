import { signJwtAccessToken } from "@/lib/jwt"
import prisma from "@/lib/prisma"
import * as bcrypt from 'bcrypt'

interface RequestBody {
  username: string
  password: string
}

export async function POST(request:Request){
  const body:RequestBody = await request.json();

  console.error('body', body);

  const user = await prisma.user.findFirst({
    where:{
      userName:body.username
    }
  })

  console.error('user', user);

  
  if(user && (await bcrypt.compare(body.password, user.password))){
    console.error('dans le if user et bcrypt');
    const {password, ... userWithoutPass} = user
    const accessToken = signJwtAccessToken(userWithoutPass)
    const result = {
      ...userWithoutPass,
      accessToken
    }
    console.error('result', result);
    return new Response(JSON.stringify(result))
  }
  else return new Response(JSON.stringify(null))
}