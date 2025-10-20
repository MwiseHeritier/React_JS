import { Header } from '../components/Header';
import { products } from '../../starting-code/data/products';

import CheckmarkIcon from '../assets/images/icons/checkmark.png';
import './HomePage.css'

export function HomePage() {
	return (
		<>

			<title>Ecommerce Project</title>
			<link rel="icon" type="image/svg+xml" href="home-favicon.png" />

			<Header />

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
									${(product.priceCents / 100).toFixed(2)}
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
*/
}