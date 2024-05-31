import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  // Cast the ReadStream to `any` to appease the TypeScript compiler
  const image = await openai.images.createVariation({
    image: fs.createReadStream("image.png") as any,
  });

  console.log(image.data);
}
main();

const response = await openai.images.createVariation({
  model: "dall-e-2",
  image: fs.createReadStream("corgi_and_cat_paw.png"),
  n: 1,
  size: "1024x1024"
});
let image_url = response.data[0].url;