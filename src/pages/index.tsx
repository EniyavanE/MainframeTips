import { QuestionAnswerComponent } from '@/components/question-answer-component'
import { commands } from '@/data/commands'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='mx-auto mt-10 p-10 max-w-md'>
      {commands.map(x => <QuestionAnswerComponent key={x.heading} q={x.heading} a={x.fix}/>)}
    </div>
  )
}
