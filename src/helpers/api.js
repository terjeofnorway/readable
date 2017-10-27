/**
 * The API class is responsible for the initial API loads from the server. Each static
 * function will return a promise for further handling of the caller.
 */
class API {
  static serverHost = 'http://localhost:3001';

  /**
   * Load categories from server. Only used for initial load.
   */
  static loadCategoriesFromServer() {
    return fetch(`${API.serverHost}/categories`, { headers: { Authorization: 'whatever-you-want' } }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(response => response.json());
  }

  /**
   * Load categories from server. Only used for initial load.
   */
  static loadCommentsFromServer(postId) {
    return fetch(`${API.serverHost}/posts/${postId}/comments`, { headers: { Authorization: 'whatever-you-want' } }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(response => response.json());
  }

  /**
   * Load posts from server. Only used for initial load.
   */
  static loadPostsFromServer() {
    return fetch(`${API.serverHost}/posts`, { headers: { Authorization: 'whatever-you-want' } }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(response => response.json()).catch(() => {
    });
  }

  /**
   * Delete single post from server.
   */
  static requestDeletePost(postId) {
    return fetch(`${API.serverHost}/posts/${postId}`, { method: 'DELETE', headers: { Authorization: 'whatever-you-want' } }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(response => response.json());
  }

  static requestAddPost(post) {
    const stringifiedPost = JSON.stringify(post);

    return fetch(`${API.serverHost}/posts`, {
      method: 'POST',
      body: stringifiedPost,
      headers: { Authorization: 'whatever-you-want', 'Content-Type': 'application/json' },
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(response => response.json());
  }

  static requestSaveComment(comment) {
    return fetch(`${API.serverHost}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: { Authorization: 'whatever-you-want', 'Content-Type': 'application/json' },
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(response => response.json());
  }

  static requestDeleteComment(commentId) {
    return fetch(`${API.serverHost}/comments/${commentId}`, { method: 'DELETE', headers: { Authorization: 'whatever-you-want' } }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(response => response.json());
  }
}

export default API;
