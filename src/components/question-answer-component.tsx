export interface IQuestionAnswerComponentProps {
    q: string;
    a: string;
}

export const QuestionAnswerComponent = ({ q, a }: IQuestionAnswerComponentProps) => {
    return (
        <>
            <h1>{q}</h1>
            <p>{a}</p>
        </>
    )
}