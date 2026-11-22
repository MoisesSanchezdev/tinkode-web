// Deterministic web exports from the supplied logo. No redrawing or recoloring.
import sharp from "sharp";
import { copyFile, writeFile, mkdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../../", import.meta.url));
const source = process.argv[2];
if (!source)
  throw new Error("Pass the original logo JPEG as the only argument.");
const brand = root + "public/images/brand/";
await mkdir(brand, { recursive: true });
await copyFile(source, brand + "tinkode-logo-original.jpg");
// Rectangles only exclude the empty black margins in the supplied square.
const logo = await sharp(source)
  .extract({ left: 174, top: 338, width: 910, height: 550 })
  .png()
  .toBuffer();
const symbol = await sharp(source)
  .extract({ left: 378, top: 348, width: 470, height: 350 })
  .png()
  .toBuffer();
await sharp(logo)
  .png()
  .toFile(brand + "tinkode-logo.png");
await sharp(logo)
  .resize({ width: 364 })
  .webp({ lossless: true })
  .toFile(brand + "tinkode-logo.webp");
await sharp(symbol)
  .resize({ width: 256 })
  .png()
  .toFile(brand + "tinkode-symbol.png");
const icon = await sharp(symbol)
  .resize(256, 256, { fit: "contain", background: "#000000" })
  .png()
  .toBuffer();
const iconSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><title>TinKode</title><image width="256" height="256" href="data:image/png;base64,' +
  icon.toString("base64") +
  '"/></svg>';
await writeFile(root + "public/favicon.svg", iconSvg);
await sharp(icon)
  .resize(32, 32)
  .png()
  .toFile(root + "public/favicon-32.png");
await sharp(icon)
  .resize(180, 180)
  .png()
  .toFile(root + "public/apple-touch-icon.png");
const grid =
  Array.from(
    { length: 30 },
    (_, i) => '<path d="M' + i * 48 + ' 0v630" />',
  ).join("") +
  Array.from(
    { length: 14 },
    (_, i) => '<path d="M0 ' + i * 48 + 'h1200" />',
  ).join("");
const og =
  '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#000"/><g stroke="#2c9cff" opacity=".07">' +
  grid +
  '</g><image x="72" y="45" width="250" height="151" href="data:image/png;base64,' +
  logo.toString("base64") +
  '"/><path d="M800 112h300M884 140h216" stroke="#18f28a" opacity=".45"/><path d="M942 168h158" stroke="#2c9cff" opacity=".5"/><text x="86" y="295" fill="#f4f7fb" font-family="Segoe UI,Arial,sans-serif" font-size="64" font-weight="600" letter-spacing="-2">Tu negocio.</text><text x="86" y="375" fill="#18f28a" font-family="Segoe UI,Arial,sans-serif" font-size="76" font-weight="600" letter-spacing="-2">Mejor conectado.</text><text x="90" y="456" fill="#b7c2cf" font-family="Segoe UI,Arial,sans-serif" font-size="26">Sitios, sistemas y automatizaciones a medida.</text><path d="M90 518h1020" stroke="#f4f7fb" opacity=".14"/><text x="90" y="557" fill="#7f8b9a" font-family="Consolas,monospace" font-size="15" letter-spacing="1">TECNOLOGÍA PARA QUE LOS NEGOCIOS FUNCIONEN MEJOR</text></svg>';
await sharp(Buffer.from(og))
  .png()
  .toFile(root + "public/og.png");
const files = ["tinkode-logo.png", "tinkode-logo.webp", "tinkode-symbol.png"];
for (const name of files)
  console.log(
    name,
    (await stat(brand + name)).size,
    await sharp(brand + name)
      .metadata()
      .then((m) => [m.width, m.height]),
  );
