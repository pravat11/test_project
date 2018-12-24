export function initializeTodo(payload = []) {
  return {
    payload,
    type: 'INITIALIZE_TODO'
  };
}
