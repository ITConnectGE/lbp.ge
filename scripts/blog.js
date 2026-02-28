const _basePath = document.querySelector('meta[name="base-path"]')?.content || '.';
const blog1 = document.querySelector("#blog1");
const blog2 = document.querySelector("#blog2");
const blog3 = document.querySelector("#blog3");
const blog4 = document.querySelector("#blog4");
const blogs = document.querySelectorAll(".blogs");
const content = document.querySelector("#content");
const burgerButton = document.querySelector("#burgerList");
const blogList = document.querySelector("#blogList");
const blog2Ul1 = document.querySelector("#blog2Ul1")
burgerButton.addEventListener("click", () => {
  if (blogList.style.display === "block") {
    blogList.style.display = "none";
  } else {
    blogList.setAttribute("style", "display: block !important;");
  }
});

blog1.addEventListener("click", () => {
  if (window.innerWidth <= 1320) {
    blogList.style.display = "none";
  }
  blogs.forEach((e) => (e.style.color = "#282C34"));
  blog1.style.color = "#32578b";
});
blog2.addEventListener("click", () => {
  if (window.innerWidth <= 1320) {
    blogList.style.display = "none";
  }
  blogs.forEach((e) => (e.style.color = "#282C34"));
  blog2.style.color = "#32578b";

  content.innerHTML = `
	<h1>
	Virtual Assets in Georgia 2: Regulation and New Practical Challenges
 </h1>
 <div class="data">04.12.2024</div>
 <ul class="nav">
	<a href="#provider">Virtual Asset Service Provider</a>
	<a href="#practice">Practice </a>
	<a href="#contact">Contact our legal team to learn more</a>
 </ul>
	 <ul class="items">
	<li class="item">
	  <p class="text">
		Until 2023, Georgian legislation did not recognize the concept of cryptocurrency, which is now defined as a "virtual asset." As a result of recent amendments, cryptocurrency was recognized as a virtual asset, and its definition was established by a decree from the President of the National Bank of Georgia. According to this definition, a virtual asset is a digital representation of value that is interchangeable and not unique, used for transfer or trade in a digital format, and intended for investment and/or making payments.
		</br>
		</br>
	<span >
		<img src="${_basePath}/img/iconi.png" alt="">
		The decree also clarifies that a virtual asset does not include a digital representation of money, securities, or other financial instruments. For example, the Georgian lari cannot be represented as a virtual asset.
		
</span>
		</br>
	</br>
	It is also interesting to consider what is meant by services related to virtual assets. Simply put, this refers to activities associated with convertible virtual assets, meaning digital assets that have monetary value and can be used in various forms. Examples of such services include: currency or asset exchange — exchanging virtual assets for national or foreign currency, other virtual assets, or financial instruments; secure storage and administration of virtual assets for future use; and management of trading platforms — creation and administration of platforms for buying and selling virtual assets.	
</br>
</br>

		Additionally, the legislative changes allow for the provision of virtual assets on loan. This could be of interest to companies that already own virtual assets and wish to increase their financial resources without selling them. However, such activities come with certain business risks that should be assessed based on the company's internal policies and resources.
	  </p>
	</li>
	<li id="provider" class="item">
		<h3 class="subject">Virtual Asset Service Provider
		</h3>
	  <p class="text">
		Given the specific nature of providing these services, it is logical that anyone engaged in the storage, trading, or other operations involving virtual assets must meet certain requirements. Under the new legislation, the right to provide such services is granted to the "virtual asset service provider" — a legal entity registered under Georgian law, which provides services not for its own benefit, but on behalf of other parties. The responsibility for registration and supervision of service providers lies with the National Bank of Georgia. 				</br>
	</br>

		Those wishing to register as a provider, cancel registration, or make changes such as the location of the main office must contact the National Bank. To register, the provider must submit documentation regulated by the decree of the President of the National Bank of Georgia “On the Approval of Rules for the Registration and Regulation of Payment Service Providers.” The National Bank makes a decision on registration within 60 days, and the registration fee is 5,000 GEL.				</br>
	</br>
		
		The legislative changes also clearly state that the regulation of virtual assets is linked to the prevention of money laundering in Georgia. According to the National Bank's requirements, providers are required to have internal policies for the prevention of money laundering and the financing of terrorism. Before starting operations, the provider must confirm the existence of such a system or implement it before working with virtual assets. This makes sense given that virtual assets are often used in transactions that are more difficult to monitor and regulate compared to traditional financial systems. For example, small transactions involving virtual assets often remain outside the control and attention of traditional mechanisms.				</br>
	</br>
		
		
	  </p>
	</li>
	<li id="practice" class="item">
		<h3 class="subject">Practice
		</h3>
	  <p class="text">
		Since the regulations governing the virtual asset services sector came into effect last year, many questions have arisen in everyday practice. The National Bank of Georgia is striving to tightly control the use of virtual assets by setting specific frameworks for providers, which helps ensure transparency and security in the financial system. 				</br>
	</br>

For example, </br>
Can a person accept virtual assets as payment for goods or services? </br>
Are transactions using virtual assets legal within Georgia?				</br>
</br>

Answering: Transactions using virtual assets are prohibited in Georgia, except for special cases defined by the National Bank. For example, a service provider cannot accept cryptocurrency as direct payment for their products or services. However, a virtual asset service provider has the right to charge a fee in the same virtual asset they are working with. 
	  </p>
		</li>
		<div class="contact">
			<a class="user" href="https://www.linkedin.com/in/giorgishalamberidze/">
			<h4 class="author">
					<img src="${_basePath}/img/photo.jpg" alt=""> Giorgi Shalamberidze
			</h4>
			</a>
				<h1 id="contact" >Contact our legal team to learn more</h1>
				<a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lbp.ge">
				<button class="button">Write to lawyer</button>
				</a>
		</div>
	 </ul>
  </div>
</div>`;
});
blog3?.addEventListener("click", () => {
  if (window.innerWidth <= 1320) {
    blogList.style.display = "none";
  }
  blogs.forEach((e) => (e.style.color = "#282C34"));
  blog3.style.color = "#32578b";
  content.innerHTML = `
	<h1>
	Virtual Assets in Georgia 3: Regulation and New Practical Challenges
 </h1>
 <div class="data">05.12.2024</div>
 <ul class="nav">
	<a href="#provider">Virtual Asset Service Provider</a>
	<a href="#practice">Practice </a>
	<a href="#contact">Contact our legal team to learn more</a>
 </ul>
	 <ul class="items">
	<li class="item">
	  <p class="text">
		Until 2023, Georgian legislation did not recognize the concept of cryptocurrency, which is now defined as a "virtual asset." As a result of recent amendments, cryptocurrency was recognized as a virtual asset, and its definition was established by a decree from the President of the National Bank of Georgia. According to this definition, a virtual asset is a digital representation of value that is interchangeable and not unique, used for transfer or trade in a digital format, and intended for investment and/or making payments.
		</br>
		</br>
	<span >
		<img src="${_basePath}/img/iconi.png" alt="">
		The decree also clarifies that a virtual asset does not include a digital representation of money, securities, or other financial instruments. For example, the Georgian lari cannot be represented as a virtual asset.
		
</span>
		</br>
	</br>
	It is also interesting to consider what is meant by services related to virtual assets. Simply put, this refers to activities associated with convertible virtual assets, meaning digital assets that have monetary value and can be used in various forms. Examples of such services include: currency or asset exchange — exchanging virtual assets for national or foreign currency, other virtual assets, or financial instruments; secure storage and administration of virtual assets for future use; and management of trading platforms — creation and administration of platforms for buying and selling virtual assets.	
</br>
</br>

		Additionally, the legislative changes allow for the provision of virtual assets on loan. This could be of interest to companies that already own virtual assets and wish to increase their financial resources without selling them. However, such activities come with certain business risks that should be assessed based on the company's internal policies and resources.
	  </p>
	</li>
	<li id="provider" class="item">
		<h3 class="subject">Virtual Asset Service Provider
		</h3>
	  <p class="text">
		Given the specific nature of providing these services, it is logical that anyone engaged in the storage, trading, or other operations involving virtual assets must meet certain requirements. Under the new legislation, the right to provide such services is granted to the "virtual asset service provider" — a legal entity registered under Georgian law, which provides services not for its own benefit, but on behalf of other parties. The responsibility for registration and supervision of service providers lies with the National Bank of Georgia. 				</br>
	</br>

		Those wishing to register as a provider, cancel registration, or make changes such as the location of the main office must contact the National Bank. To register, the provider must submit documentation regulated by the decree of the President of the National Bank of Georgia “On the Approval of Rules for the Registration and Regulation of Payment Service Providers.” The National Bank makes a decision on registration within 60 days, and the registration fee is 5,000 GEL.				</br>
	</br>
		
		The legislative changes also clearly state that the regulation of virtual assets is linked to the prevention of money laundering in Georgia. According to the National Bank's requirements, providers are required to have internal policies for the prevention of money laundering and the financing of terrorism. Before starting operations, the provider must confirm the existence of such a system or implement it before working with virtual assets. This makes sense given that virtual assets are often used in transactions that are more difficult to monitor and regulate compared to traditional financial systems. For example, small transactions involving virtual assets often remain outside the control and attention of traditional mechanisms.				</br>
	</br>
		
		
	  </p>
	</li>
	<li id="practice" class="item">
		<h3 class="subject">Practice
		</h3>
	  <p class="text">
		Since the regulations governing the virtual asset services sector came into effect last year, many questions have arisen in everyday practice. The National Bank of Georgia is striving to tightly control the use of virtual assets by setting specific frameworks for providers, which helps ensure transparency and security in the financial system. 				</br>
	</br>

For example, </br>
Can a person accept virtual assets as payment for goods or services? </br>
Are transactions using virtual assets legal within Georgia?				</br>
</br>

Answering: Transactions using virtual assets are prohibited in Georgia, except for special cases defined by the National Bank. For example, a service provider cannot accept cryptocurrency as direct payment for their products or services. However, a virtual asset service provider has the right to charge a fee in the same virtual asset they are working with. 
	  </p>
		</li>
		<div class="contact">
			<a class="user" href="https://www.linkedin.com/in/giorgishalamberidze/">
			<h4 class="author">
					<img src="${_basePath}/img/photo.jpg" alt=""> Giorgi Shalamberidze
			</h4>
			</a>
				<h1 id="contact" >Contact our legal team to learn more</h1>
				<a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lbp.ge">
				<button class="button">Write to lawyer</button>
				</a>
		</div>
	 </ul>
  </div>
</div>`;
});
blog4?.addEventListener("click", () => {
  if (window.innerWidth <= 1320) {
    blogList.style.display = "none";
  }
  blogs.forEach((e) => (e.style.color = "#282C34"));
  blog4.style.color = "#32578b";

  content.innerHTML = `
	<h1>
	Virtual Assets in Georgia 6: Regulation and New Practical Challenges
 </h1>
 <div class="data">03.12.2024</div>
 <ul class="nav">
	<a href="#provider">Virtual Asset Service Provider</a>
	<a href="#practice">Practice </a>
	<a href="#contact">Contact our legal team to learn more</a>
 </ul>
	 <ul class="items">
	<li class="item">
	  <p class="text">
		Until 2023, Georgian legislation did not recognize the concept of cryptocurrency, which is now defined as a "virtual asset." As a result of recent amendments, cryptocurrency was recognized as a virtual asset, and its definition was established by a decree from the President of the National Bank of Georgia. According to this definition, a virtual asset is a digital representation of value that is interchangeable and not unique, used for transfer or trade in a digital format, and intended for investment and/or making payments.
		</br>
		</br>
	<span >
		<img src="${_basePath}/img/iconi.png" alt="">
		The decree also clarifies that a virtual asset does not include a digital representation of money, securities, or other financial instruments. For example, the Georgian lari cannot be represented as a virtual asset.
		
</span>
		</br>
	</br>
	It is also interesting to consider what is meant by services related to virtual assets. Simply put, this refers to activities associated with convertible virtual assets, meaning digital assets that have monetary value and can be used in various forms. Examples of such services include: currency or asset exchange — exchanging virtual assets for national or foreign currency, other virtual assets, or financial instruments; secure storage and administration of virtual assets for future use; and management of trading platforms — creation and administration of platforms for buying and selling virtual assets.	
</br>
</br>

		Additionally, the legislative changes allow for the provision of virtual assets on loan. This could be of interest to companies that already own virtual assets and wish to increase their financial resources without selling them. However, such activities come with certain business risks that should be assessed based on the company's internal policies and resources.
	  </p>
	</li>
	<li id="provider" class="item">
		<h3 class="subject">Virtual Asset Service Provider
		</h3>
	  <p class="text">
		Given the specific nature of providing these services, it is logical that anyone engaged in the storage, trading, or other operations involving virtual assets must meet certain requirements. Under the new legislation, the right to provide such services is granted to the "virtual asset service provider" — a legal entity registered under Georgian law, which provides services not for its own benefit, but on behalf of other parties. The responsibility for registration and supervision of service providers lies with the National Bank of Georgia. 				</br>
	</br>

		Those wishing to register as a provider, cancel registration, or make changes such as the location of the main office must contact the National Bank. To register, the provider must submit documentation regulated by the decree of the President of the National Bank of Georgia “On the Approval of Rules for the Registration and Regulation of Payment Service Providers.” The National Bank makes a decision on registration within 60 days, and the registration fee is 5,000 GEL.				</br>
	</br>
		
		The legislative changes also clearly state that the regulation of virtual assets is linked to the prevention of money laundering in Georgia. According to the National Bank's requirements, providers are required to have internal policies for the prevention of money laundering and the financing of terrorism. Before starting operations, the provider must confirm the existence of such a system or implement it before working with virtual assets. This makes sense given that virtual assets are often used in transactions that are more difficult to monitor and regulate compared to traditional financial systems. For example, small transactions involving virtual assets often remain outside the control and attention of traditional mechanisms.				</br>
	</br>
		
		
	  </p>
	</li>
	<li id="practice" class="item">
		<h3 class="subject">Practice
		</h3>
	  <p class="text">
		Since the regulations governing the virtual asset services sector came into effect last year, many questions have arisen in everyday practice. The National Bank of Georgia is striving to tightly control the use of virtual assets by setting specific frameworks for providers, which helps ensure transparency and security in the financial system. 				</br>
	</br>

For example, </br>
Can a person accept virtual assets as payment for goods or services? </br>
Are transactions using virtual assets legal within Georgia?				</br>
</br>

Answering: Transactions using virtual assets are prohibited in Georgia, except for special cases defined by the National Bank. For example, a service provider cannot accept cryptocurrency as direct payment for their products or services. However, a virtual asset service provider has the right to charge a fee in the same virtual asset they are working with. 
	  </p>
		</li>
		<div class="contact">
			<a class="user" href="https://www.linkedin.com/in/giorgishalamberidze/">
			<h4 class="author">
					<img src="${_basePath}/img/photo.jpg" alt=""> Giorgi Shalamberidze
			</h4>
			</a>
				<h1 id="contact" >Contact our legal team to learn more</h1>
				<a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@lbp.ge">
				<button class="button">Write to lawyer</button>
				</a>
		</div>
	 </ul>
  </div>
</div>`;
});
