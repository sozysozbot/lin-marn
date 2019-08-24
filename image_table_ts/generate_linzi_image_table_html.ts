function generate_table_html(preloading: false): string {
	return gen_table(
		folder_names.map(n => "<td>" + n + "</td>").join(""),
		linzi => folder_names.map(name => "<td>" + getCell(name, linzi) + "</td>").join("")
	);
}

function firstCell(linzi: string):
	({ res: string, hasPercent?: true, hasAsterisk?: true }) {
	let imageExists: boolean = false;

	/* check if at least 1 image exists */
	for (var j: number = 0; j < folder_names.length; j++) {
		if (NEW_IMAGE_EXISTENCE_TABLE[folder_names[j]].includes(linzi)) {
			imageExists = true;
		}
	}

	let ans: string = "";
	if (imageExists) {
		ans += `<td>${linzi}</td>`
		if (defined_but_no_image_prepared.includes(linzi)) {
			alert(`業務連絡: 「${linzi}」の画像は足したのでdefined_but_no_image_preparedから取り除くこと`);
		}
		return { res: ans };
	} else if (defined_but_no_image_prepared.includes(linzi)) {
		ans += `<td style="background-color: cyan">%${linzi}</td>`;
		return { res: ans, hasPercent: true };
	} else {
		ans += `<td style="background-color: yellow">*${linzi}</td>`;
		return { res: ans, hasAsterisk: true };
	}
}

function gen_table(header_row: string, main_row: (linzi: string) => string): string {
	var ans: string = "";
	ans += "<table>";

	ans += "<tr>";
	ans += "<td>字</td>"
	ans += header_row;
	ans += "</tr>";

	let count_asterisk = 0;
	let count_percent = 0;

	linzi_list.map((linzi) => {
		const { res, hasAsterisk, hasPercent } = firstCell(linzi);
		if (hasAsterisk) {
			count_asterisk++;
		}
		if (hasPercent) {
			count_percent++;
		}

		ans += "<tr>";
		ans += res;
		ans += main_row(linzi);

		ans += "</tr>";
	});
	ans += "</table>";


	ans = `
		<div style="border: 1px solid blue; padding: 5px; margin: 5px">
			凡例:
			<table>
				<tr>
					<td style='background-color: yellow'>*漢字</td>
					<td>燐字の字形が定まっていない（現状${count_asterisk}件）</td>
				</tr>
				<tr>
					<td style='background-color: cyan'>%漢字</td>
					<td>燐字の字形が定まっているが画像が用意できていない（現状${count_percent}件）</td>
				</tr>
			</table>
		</div>` + ans;

	return ans;
}


function generate_table_narrow_html(): string {	
	const iterateOverAuthor = (f: (a: FolderName[]) => string) => {
		let a = "";
		for (var k = 0; k < imageAuthors.length; k++) {
			a += "<td style='text-align: center'>"
				+ f(folder_names.filter(fname => folder_type[fname] === imageAuthors[k]));
			+ "</td>";
		}
		return a;
	}

	return gen_table(
		iterateOverAuthor((a: FolderName[]) => a.join("<br>")),
		linzi => iterateOverAuthor((a: FolderName[]) => a.map(name => getCell(name, linzi)).join(""))
	);
}

function getCell(folder_name: FolderName, linzi: string): string {
	let ans = "";
	if (NEW_IMAGE_EXISTENCE_TABLE[folder_name].includes(linzi)) {
		ans += `<img src='${folder_name}/${linzi}.png' width='100' height='100' />`
	}
	return ans;
}

function checkImageExists(imageUrl: string, linzi: string, name: FolderName,
	callBack: (l: string, n: FolderName, f: boolean) => void) {
	var imageData = new Image();
	imageData.onload = function () {
		callBack(linzi, name, true);
	};
	imageData.onerror = function () {
		callBack(linzi, name, false);
	};
	imageData.src = imageUrl;
}

function linzi_image_table_local() {
	var IMAGE_EXISTENCE_TABLE_DUMMY: {
		[P in string]: {}
	} = {};
	for (var i = 0; i < linzi_list.length; i++) {
		IMAGE_EXISTENCE_TABLE_DUMMY[linzi_list[i]] = {};
		for (var j = 0; j < folder_names.length; j++) {
			var imagePath = `${folder_names[j]}/${linzi_list[i]}.png`;
			var linzi = linzi_list[i];
			var name = folder_names[j];
			checkImageExists(imagePath, linzi, name, function (linzi, name, flag) {
				if (flag !== IMAGE_EXISTENCE_TABLE[linzi][name]) {
					let message = "INCONSISTENCY!!! INCONSISTENCY!!! at " + linzi + ", " + name;
					alert(message);
					throw new Error(message);
				}
			})
		}
	}

	const generate_table_html_with_preloading = () => {
		var ans: string = "";
		ans += "<table>";

		ans += "<tr>";
		ans += "<td>字</td>"
		for (var j: number = 0; j < folder_names.length; j++) {
			ans += "<td>" + folder_names[j] + "</td>";
		}
		ans += "</tr>";

		for (var i: number = 0; i < linzi_list.length; i++) {
			ans += "<tr>";
			ans += `<td>${linzi_list[i]}</td>`

			for (var j = 0; j < folder_names.length; j++) {
				ans += `<td>`;
				ans += `<img src='${folder_names[j]}/${linzi_list[i]}.png' width='100' height='100' />`
				ans += `</td>`;
			}
			ans += "</tr>";
		}
		ans += "</table>";

		return ans;
	}

	document.write(generate_table_html_with_preloading());
}
