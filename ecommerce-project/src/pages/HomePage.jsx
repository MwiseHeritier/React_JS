import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatMoney } from '../utils/money';
import { Header } from '../components/Header';


import CheckmarkIcon from '../assets/images/icons/checkmark.png';
import './HomePage.css'

export function HomePage({ cart }) {
	const[products, setProducts] = useState([]);
	

	useEffect(() =>{
		axios.get('/api/products')
			.then((response) =>{
				setProducts(response.data);
			});
	}, []);
	

	return (
		<>

			<title>Ecommerce Project</title>
			<link rel="icon" type="image/svg+xml" href="home-favicon.png" />

			<Header cart={cart}/>

			<div className="home-page">
				<div className="products-grid">
					{products.map((product) => {
						return (
							<div key={product.id} className="product-container">
								<div className="product-image-container">
									<img className="product-image"
										src={product.image} />
								</div>

								<div className="product-name limit-text-to-2-lines">
									{product.name}
								</div>

								<div className="product-rating-container">
									<img className="product-rating-stars"
										src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
									<div className="product-rating-count link-primary">
										{product.rating.count}
									</div>
								</div>

								<div className="product-price">
									{formatMoney(product.priceCents)}
								</div>

								<div className="product-quantity-container">
									<select>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
									</select>
								</div>

								<div className="product-spacer"></div>

								<div className="added-to-cart">
									<img src={CheckmarkIcon} />
									Added
								</div>

								<button className="add-to-cart-button button-primary">
									Add to Cart
								</button>
							</div>
						)
					})}
					
				</div>
			</div>
		</>
	);

/*

Backend
-------
-> The process of starting the backend is very similar to
react frontend we use 'npm install' to install all packages. 

Use of Backend in This Project
------------------------------

→ Used to store product data:
-------------------------------
Our e-commerce website may have thousands of products, so it doesn’t make sense
to save everything on a user’s or developer’s computer — local storage would quickly
run out of space. Instead, companies use dedicated servers or data centers (the backend)
to store all product information securely. When users visit the website, the frontend
requests product data from the backend and displays it.

Used to save the shopping cart:
-------------------------------
Saving the cart on the user's computer would limit access to that specific device only.
If the same user logs in from a different computer or phone, their cart would be lost.
To solve this, the backend stores cart data on the server, allowing users to access
their saved cart from any device.


-> The user’s cart is stored in the database. Even if they log in from a different computer or phone,
the backend retrieves their saved cart.

-> Example: You add a phone and a charger to your cart on your laptop.
Later, you open the same website on your phone → you still see your saved items because they’re stored in the backend.

→ Used to share and synchronize data between computers:
------------------------------------------------------
The backend acts as a central communication point for all users and devices.
It ensures that everyone accessing the website sees the same updated data —
such as available products, prices, and stock levels. This makes it possible
for many users to use the website simultaneously while staying synchronized
with the same database.

Data Fetching
-------------
-> Means get data from the backend using our codes.

fetch()
------
-> is a built-in JavaScript function used to communicate with the backend (server)
->It allows your frontend (e.g., your website) to send requests to the backend and get responses — usually in JSON format.
-> We can't save data in a variable (like this: const products = fetch('http://localhost:3000/api/products') ) bcz when 
we contact with the backend it takes time for this code to reach the backend and to get a response.

->fetch() is asynchronous code means codes that does not finish immediately(right away)
-> fetch() returns a promise , promise let us wait for asynchronous code to finish.
-> A promise has a method called '.then()'
-> .then() is a callback function that executes only after the Promise (like fetch()) successfully receives a response from the backend.
-> fetch() gives you the whole response, which contains headers, status, and body. response.json() specifically extracts/ gets the body 
(the data sent by the backend) and parses it into a real JavaScript object or array that you can use in your code

-> without response.json(), the data is just text; with it, you get usable JS objects ready for display, manipulation, or processing.
(like data[0].name  /data[0].price).

-> response.json() → returns a new Promise because It reads the response body stream asynchronously, It parses the JSON into a JS object,
Once done, the Promise resolves with the parsed data.

Example
--------
console.log("1️⃣ Sending request...");

fetch('https://api.myecommerce.com/products')
  .then(response => {
    console.log("2️⃣ Response arrived!");
    return response.json();
  })
  .then(data => {
    console.log("3️⃣ Data is ready:", data);
  });

console.log("4️⃣ Code keeps running...");

output
-----
1️⃣ Sending request...
4️⃣ Code keeps running...
2️⃣ Response arrived!
3️⃣ Data is ready: [ ... ]


Axios
----
-> Is npm package used to make requests from the backend
-> Is the cleaner way than fetching
-> to install it we use 'npm install axios@{latest version}
-> After we run it using 'npm run dev'
-> We first import it in the code editor using 'import axios from 'axios'


N.B:
----
We use **`useEffect`** because if we don’t, the `axios.get()` function would
run **every time** the `HomePage` component re-renders — sending multiple unnecessary 
requests to the backend.By using `useEffect` with an **empty dependency array `[]`**, 
we make sure that `axios.get()` runs **only once**, when the `HomePage` component is first created (mounted).

If you notice `useEffect` running **twice** in the console, it’s because **React Strict Mode** is enabled.
Strict Mode intentionally runs certain functions (including `useEffect`) twice in development mode to help detect potential bugs.
This only happens in development — it won’t happen in the production build.

->We use useState to save the data of products. And then we can generate HTML of each product 
->saves the fetched products into your state so you can display them.
-> setProducts(response.data); this will saves the fetched/products data into products and use 'products' variable
to generate HTML

Server-proxy configuration
-------------------------
server: {
	proxy: {
		'/api' : {
			target: 'http://localhost:3000'
		},
		'/images' : {
			target: 'http://localhost:3000'
		}
	}
}

This means URL path starts with '/api ' the request will automaticall go to target'

key property
------------
->Unique identifier for each item in a list
->Helps React track which items changed, added, or removed
-> We use key, if something changes (like adding, deleting, or reordering products), 
React must figure out which items changed so it can update only those, not the whole list.
*/
}