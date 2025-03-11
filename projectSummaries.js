const projectSummaries = [
	{
		"mainUrl" : {"href" : "spokes.html", "text":"spoke template maker"},
		"codeType" : "HTML/CSS",
		"summary" : "lorum ipsum 1",
		"repoUrl" : {"href" : "www.repo1.com", "text" : "url 1.2"}
	},
	{
		"mainUrl" : {"href" : "www.example1.com", "text":"url 2.1"},
		"codeType" : "HTML2/CSS",
		"summary" : "lorum ipsum 2",
		"repoUrl" : {"href" : "www.repo2.com", "text" : "url 2.2"}
	},
];

console.log('projectSummaryGenerator defining...')

// ----------------------------------------------------------------------------
// responsible for packaging summaries into html
function* projectSummaryGenerator()
{
	let i = 0;

	console.log('project summary gen...');

	while (i < projectSummaries.length)
	{
		const curSummary = projectSummaries[i];

		let htmlString = '';
		htmlString += `<h2><a href="${curSummary['mainUrl']['href']}" target="_blank">${curSummary['mainUrl']['text']}</a></h2>`;
		htmlString += `<span style="size:85%;">${curSummary["codeType"]}</span>`;
		htmlString += `<p>${curSummary['summary']}</p>`;
		htmlString += `(<a href="${curSummary['repoUrl']['text']}">${curSummary['repoUrl']['text']}</a>)`;

		yield htmlString;
		i += 1;
	}

	return;
}
