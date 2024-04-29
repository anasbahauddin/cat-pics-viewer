import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const picsHeader = request.headers.get("Pics-Amount") ?? "0";
  let numberOfPics = 1;

  if (Number.parseInt(picsHeader)) {
    numberOfPics = Number.parseInt(picsHeader);
  }

  const url = `https://api.thecatapi.com/v1/images/search?limit=${numberOfPics}&order=RAND`;

  const requestHeaders = {
    // "x-api-key": `${process.env.API_KEY}`,
  };

  const catPics = await fetch(url, {
    headers: requestHeaders,
  });

  if (catPics.status == 200) {
    const pics = await catPics.json();
    return NextResponse.json(pics);
  }

  return new Response("Failed to fetch from api.", {
    status: 400,
  });
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<string[]>
// ) {
//   console.log("req");
//   if (req.method == "GET") {
//     res.status(200).json(["test string"]);
//   }

//   res.status(404);
// }
