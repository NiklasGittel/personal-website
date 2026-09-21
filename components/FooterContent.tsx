import { Button } from "./ui/button"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const FooterContent = () => {
  return (
    <div className="grid grid-cols-3 items-center p-4 text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} Niklas Gittel. All rights reserved.
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