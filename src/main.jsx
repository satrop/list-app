import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts, { loader as postsLoader } from './routes/Posts';
import NewPost, { action as postAction } from './routes/NewPost/NewPost';
import PostDetails, {
	loader as postDetailsLoader,
} from './routes/PostDetails/PostDetails';
import RootLayout from './routes/RootLayout';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/list-app/',
				element: <Posts />,
				loader: postsLoader,
				children: [
					{
						path: 'create-post',
						element: <NewPost />,
						action: postAction,
					},
					{
						path: ':id',
						element: <PostDetails />,
						loader: postDetailsLoader,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
