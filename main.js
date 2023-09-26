let cards=[
			{ icon:"bi-briefcase",
			  title:"Lorem Ipsum",
			  description:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
			},
			{ icon:"bi-card-checklist",
			  title:"Dolor Sitema",
			  description:"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
			},
			{ icon:"bi-bar-chart",
			  title:"Sed ut perspiciatis",
			  description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
			},
			{ icon:"bi-binoculars",
			  title:"Magni Dolores",
			  description:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
			},
			{ icon:"bi-brightness-high",
			  title:"Nemo Enim",
			  description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
			},
			{ icon:"bi-calendar4-week",
			  title:"Eiusmod Tempor",
			  description:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"
			}];

let parentDiv = document.getElementsByClassName("row")[0];	// give index value if you want to get an elmt by using class-name.
cards.forEach(function(value,index)
	{
		let divIconBox	= document.createElement("div");
		divIconBox.setAttribute("class","col-lg-4 col-md-6 icon-box");
		
		let	divIcon		= document.createElement("div");
		divIcon.setAttribute("class","icon");
		
		let	iTag		= document.createElement("i");
		iTag.setAttribute("class","bi "+value.icon);
		
		let	h4Tag		= document.createElement("h4");
		h4Tag.setAttribute("class","title");
		
		let	aTag		= document.createElement("a");
		aTag.setAttribute("href","#");
		
		let	pTag		= document.createElement("p");
		pTag.setAttribute("class","description");
		
		aTag.innerHTML=value.title;
		pTag.innerHTML=value.description;
		
		divIcon.appendChild(iTag);
		h4Tag.appendChild(aTag);
		divIconBox.append(divIcon,h4Tag,pTag);
		
		parentDiv.appendChild(divIconBox);
	});
		
		
		// <div class="col-lg-4 col-md-6 icon-box aos-init aos-animate" data-aos="fade-up">
            // <div class="icon"><i class="bi bi-briefcase"></i></div>
            // <h4 class="title"><a href="">Lorem Ipsum</a></h4>
            // <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          // </div>