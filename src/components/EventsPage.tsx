import React, {FC} from 'react';
import Card, {CardVariant} from "./Cart";
import EventsExample from "./EventsExample";

const EventsPage: FC = () => {

    const onCardClick = (num: number) => {
        console.log(num)
    }

    return (
        <div>
            <Card
                width='200px'
                height='200px'
                variant={CardVariant.outlined}
                onClick={onCardClick}
            >
                Card
            </Card>
            <EventsExample />
        </div>
    );
};

export default EventsPage;