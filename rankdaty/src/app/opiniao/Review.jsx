import DropMenu from '@/components/DropMenu'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'

export default function Review({ review }) {    
    const { tituloReview, descricaoReview } = review;
    return(
        <div id="data">
          <div id="data-row" className='flex justify-between  my-5 hover:bg-slate-700' >
            <div className='flex gap-2'>
              <span>{tituloReview}</span>
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-blue-500" />
            </div>
            <span>{descricaoReview}</span>
            <DropMenu />
          </div>
        </div>
    )
}