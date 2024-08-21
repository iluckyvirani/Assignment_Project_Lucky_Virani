export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';
export const CHECK_WIDGET = 'CHECK_WIDGET';

export const addWidget = (categoryName, widget) => ({
  type: ADD_WIDGET,
  payload: { categoryName, widget },
});

export const removeWidget = (categoryName, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: { categoryName, widgetId },
});


export const checkWidget = (categoryName, widgetId, checked) => {
  return {
    type: CHECK_WIDGET,
    payload: {
      categoryName,
      widgetId,
      checked,
    },
  };
};
