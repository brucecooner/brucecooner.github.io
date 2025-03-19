/*
dumb way to generate a bunch of HTML nodes from some json, I guess I was just bored one day?

usage:
HTMLGenerator.generate(contentSpecifiers, parentNode)
*/

HTMLGenerator = 
{
	// map of handlers for specific property values
	elementPropHandlers : {
		"id" : (element, id) => {element.id = id; },
		"href" : (element, href) => { element.href = href },
		"class" : (element, classList) => classList.split(" ").forEach(curClass => element.classList.add(curClass)),
		"style" : (element, styleObj) => { for (const [key,value] of Object.entries(styleObj)) { element.style[key] = value; } },
		"innerHTML" : (element, ihtml) => { element.innerHTML = ihtml; },
	},

	// ----------------------------------------------------------------------------
	// generates node of type tag from content
	// returns Node
	generateNode : function(tag, content)
	{
		let element = undefined;

		element = document.createElement(tag);

		let childNodes = undefined;

		if (typeof content === "string")
		{
			element.innerHTML = content;
		}
		else if (typeof content === "object")
		{
			for (const [key, value] of Object.entries(content))
			{
				// check for handler func
				if (HTMLGenerator.elementPropHandlers[key])
				{
					HTMLGenerator.elementPropHandlers[key](element, value);
				}
				else if (key === "children")
				{
					// children need specific handling, always
					childNodes = this.generate(value); // don't append until element is finalized
				}
				else
				{
					element[key] = value;
				}
			}
		}
		else
		{
			throw new Error("generateNode() : unhandled content type: " + typeof elementContent);
		}

		if (childNodes)
		{
			childNodes.forEach(curChildNode => {
				element.appendChild(curChildNode);
			});
		}

		return element;
	},

	// ----------------------------------------------------------------------------
	// generates nodes from spec array
	// appends nodes to parent (if specified)
	// returns [node,node,...]
	/*
		content parameter:

		{
			key: <html tag> = "p", "a", "img", etc.

			value: 
				string : becomes innerHTML of tag
				OR
				{
				<attributes> = tag relevant attributes, e.g. href, src, etc.
				<children> = optional, become children of content, e.g. <a ...><img></a>
				}
		}

		Notes:
			* can nest arrays, but they all bubble up to same tag level, only "children" props become children

		Examples:
			// a paragraph
			{ "p" : "paragraph text"}
			// an img
			{ "img" : {"src" : "www.example.com/picture.gif"}}
			// horizontal rule
			{ "hr" : "" }
			// anchor with img
			{ "a" : { "href" : "www.example.com", "children" : { "img" : "src" : "www.example.com/picture.gif"}}}
	*/

	generate : function(content, parentNode = undefined)
	{
		let nodesArray = [];

		if (typeof content === "object")
		{
			if (Array.isArray(content))
			{
				const contentArray = content;

				contentArray.forEach(currentContent => 
				{
					let generatedNodesArray = this.generate(currentContent);
					generatedNodesArray.forEach(curArrNode => {
						nodesArray.push(curArrNode);
					});
				});
			}
			else	// content is object, not array
			{
				const contentObject = content;
				for (const [key, value] of Object.entries(contentObject))
				{
					currentElement = this.generateNode(key, value);
					nodesArray.push(currentElement);
				}
			}
		}
		else	// unhandled type
		{
			throw new Error("generate(): array or object expected");
		}

		// if parent specified, append
		if (parentNode)
		{
			nodesArray.forEach(curNode =>
			{
				parentNode.appendChild(curNode);
			});
		}

		return nodesArray;
	},
};