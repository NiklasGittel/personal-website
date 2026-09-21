import { Button } from "./ui/button"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const FooterContent = () => {
  return (
    <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 items-center gap-2 p-4 text-center text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} Niklas Gittel
      <div className="flex flex-row justify-center gap-2">
        <Button size="icon" variant="ghost" render={<a href="https://linkedin.com/in/niklas-gittel" target="_blank" rel="noreferrer" />} nativeButton={false}>
          <FaLinkedin className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" render={<a href="https://github.com/NiklasGittel" target="_blank" rel="noreferrer" />} nativeButton={false}> 
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}