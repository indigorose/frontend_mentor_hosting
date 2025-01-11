fetch('./data.json')
	.then((response) => response.json())
	.then((data) => {
		const statesSection = document.querySelector('.states__container');
		const timeframeSelectors = document.querySelectorAll(
			'.profile-selector a'
		);
		// Load the initial data into the DOM - weekly timeframe
		data.forEach((item) => {
			const div = document.createElement('div');
			div.className =
				item.title.toLowerCase().replace(/\s+/g, '-') + ' state';
			div.innerHTML = `
                <div class="state-header">
                    <h2>${item.title}</h2>
                    <a href="#" class="more">...</a>
                </div>
                <p>${item.timeframes.weekly.current}hrs</p>
                <small>Last Week - ${item.timeframes.weekly.previous}hrs</small>`;
			statesSection.appendChild(div);
		});
		// Function to update the displayed data based on the selected timeframe
		const updateData = (timeframe) => {
			statesSection.innerHTML = ''; // Clear existing content in the states section

			data.forEach((item) => {
				const div = document.createElement('div');
				div.className =
					item.title.toLowerCase().replace(/\s+/g, '-') + ' state';
				div.innerHTML = `
                    <div class="state-header">
                        <h2>${item.title}</h2>
                        <a href="#" class="more">...</a>
                    </div>
                    <p>${item.timeframes[timeframe].current}hrs</p>
                    <small>Last Week - ${item.timeframes[timeframe].previous}hrs</small>`;
				statesSection.appendChild(div);
			});
		};

		// Add event listeners to the timeframe selectors
		timeframeSelectors.forEach((selector) => {
			selector.addEventListener('click', (event) => {
				event.preventDefault();
				const timeframe = selector.textContent.toLowerCase();
				updateData(timeframe);
			});
		});
	});
