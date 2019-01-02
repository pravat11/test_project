import UiState from './UiState';
import TodosState from './TodosState';

interface AppState {
  ui: UiState;
  data: TodosState;
}

export default AppState;
