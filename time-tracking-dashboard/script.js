// fetch('./data.json')
// 	.then((response) => response.json())
// 	.then((data) => {
// 		const statesSection = document.querySelector('.states__container');
// 		const timeframeSelectors = document.querySelectorAll(
// 			'.profile-selector a'
// 		);
// 		// Load the initial data into the DOM - weekly timeframe
// 		data.forEach((item) => {
// 			const div = document.createElement('div');
// 			div.className =
// 				item.title.toLowerCase().replace(/\s+/g, '-') + ' card__state';
// 			div.innerHTML = `
//                 <div class="card__header">
//                     <h2 class="card__title">${item.title}</h2>
//                     <a href="#" class="card-more">...</a>
//                 </div>
//                 <p class="card__main-hours">${item.timeframes.weekly.current}hrs</p>
//                 <p class="card__prev-hours">Last Week - ${item.timeframes.weekly.previous}hrs</p>`;
// 			statesSection.appendChild(div);
// 		});
// 		// Function to update the displayed data based on the selected timeframe
// 		const updateData = (timeframe) => {
// 			statesSection.innerHTML = ''; // Clear existing content in the states section

// 			data.forEach((item) => {
// 				const div = document.createElement('div');
// 				div.className =
// 					item.title.toLowerCase().replace(/\s+/g, '-') +
// 					' card__state state__info';
// 				div.innerHTML = `
//                 <div class="card__state-info">
//                     <div class="card__header">
//                         <h2 class="card__title">${item.title}</h2>
//                         <a href="#" class="card-more">...</a>
//                     </div>
//                     <p class ="card__main-hours">${item.timeframes[timeframe].current}hrs</p>
//                     <p class="card__prev-hours">Last Week - ${item.timeframes[timeframe].previous}hrs</p>
//                     </div>`;
// 				statesSection.appendChild(div);
// 			});
// 		};

// 		// Add event listeners to the timeframe selectors
// 		timeframeSelectors.forEach((selector) => {
// 			selector.addEventListener('click', (event) => {
// 				event.preventDefault();
// 				const timeframe = selector.textContent.toLowerCase();
// 				updateData(timeframe);
// 			});
// 		});
// 	});
