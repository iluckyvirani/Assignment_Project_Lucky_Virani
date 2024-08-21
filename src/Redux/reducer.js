import { ADD_WIDGET, REMOVE_WIDGET, CHECK_WIDGET } from './actions.js';

const initialState = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Cloud Account", text: "Random text for Widget 1", checked: true },
        { id: 2, name: "Cloud Account Risk Assessment", text: "Random text for Widget 2", checked: true },
      ],
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        { id: 3, name: "Top 5 Namespace specific Alerts", text: "Random text for Widget 3", checked: true },
        { id: 4, name: "Workload Alert", text: "Random text for Widget 4", checked: true },
      ],
    },
    {
      name: "Registry Scan",
      widgets: [
        { id: 5, name: "Image Risk Assessment", text: "Random text for Widget 5", checked: true },
        { id: 6, name: "Image Security Issues", text: "Random text for Widget 6", checked: true },
      ],
    },
  ],
};


function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.name === action.payload.categoryName
            ? {
              ...category,
              widgets: [...category.widgets, action.payload.widget],
            }
            : category
        ),
      };

    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.name === action.payload.categoryName
            ? {
              ...category,
              widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId),
            }
            : category
        ),
      };

    case CHECK_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.name === action.payload.categoryName
            ? {
              ...category,
              widgets: category.widgets.map(widget =>
                widget.id === action.payload.widgetId
                  ? { ...widget, checked: action.payload.checked }
                  : widget
              ),
            }
            : category
        ),
      };

    default:
      return state;
  }
}

export default dashboardReducer;
