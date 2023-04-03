import {UnControlledRating} from "./UnControlledRaiting";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UnControlledRating story',
    component: UnControlledRating ,
    };

const callback = action('raiting changed inside component')

export const EmptyStars = () => <UnControlledRating defaultValue={0} onChange={callback} />
export const Rating1 = () => <UnControlledRating defaultValue={1}  onChange={callback} />
export const Rating2 = () => <UnControlledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnControlledRating defaultValue={3} onChange={callback} />
export const Rating4 = () => <UnControlledRating defaultValue={4} onChange={callback} />
export const Rating5 = () => <UnControlledRating defaultValue={5} onChange={callback} />



