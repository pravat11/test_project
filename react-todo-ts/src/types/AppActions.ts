import { UiActions } from 'actions/ui';
import { TodoActions } from 'actions/todo';

type AppActions = TodoActions | UiActions;

export default AppActions;
