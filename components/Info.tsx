import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import {Info} from 'lucide-react'
  
  export function AlertDialogDemo() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {/* <Button variant="outline"><Info/></Button> */}
          <Info className="hover:cursor-pointer text-gray-300"/>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>What is this stuff?</AlertDialogTitle>
            <AlertDialogDescription>
              Enter your email to get the <span className="text-sky-600">Registraion Link</span>  and the <span className="text-sky-600">Course Contents</span>.
              <div>Have Questions? Call or Dm Us: <span className="underline underline-offset-2 decoration-sky-500">9021968502</span></div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Understood</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  