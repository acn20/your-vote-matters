import { Question } from './question';

export class GetQuestionsResponse {
    questions: Array<Question>;
}

/*

we except a response like:

{
    "questions": [
        {
            "text": "What ..."
            // etc
        }
    ]
}

*/