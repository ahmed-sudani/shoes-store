import FAQItem from './FAQItem'

type FAQItem = {
  question: string
  answer: string
}

interface FAQListProps {
  faqItems: FAQItem[]
}

const FAQList: React.FC<FAQListProps> = ({ faqItems }) => {
  return (
    <div className='flex flex-col gap-2'>
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

export default FAQList
