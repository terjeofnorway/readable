import {inflateCategories} from '../actions/initActions';


class API {
    /**
     * Load categories from server. Only used for initial load.
     */
    static loadCategoriesFromServer() {
        return fetch('http://localhost:3001/categories/', {headers: {'Authorization': 'whatever-you-want'}})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json());
    }

    /**
     * Load posts from server. Only used for initial load.
     */
    static loadPostsFromServer() {
        return fetch('http://localhost:3001/posts/', {headers: {'Authorization': 'whatever-you-want'}})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json());
    }
}



export default API;
