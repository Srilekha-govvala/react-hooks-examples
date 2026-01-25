import { Provider } from "react-redux";
import { store } from "./store";
import ReduxApp from "./ReduxApp"
export default function MainRedux() {
  return (
    <Provider store={store}>
      <ReduxApp/>
    </Provider>
  );
}