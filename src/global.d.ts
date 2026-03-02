declare module "*.css"

declare module "*.pdf" {
  const file: string
  export default file
}