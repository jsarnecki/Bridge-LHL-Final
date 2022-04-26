function LCATable(before, after) {
	const table = Array(after.length + 1)
		.fill(0)
		.map(() => Array(before.length + 1).fill(0));
	for (let i = after.length - 1; i >= 0; --i) {
		for (let j = before.length - 1; j >= 0; --j) {
			if (before[j] === after[i]) {
				table[i][j] = 1 + table[i + 1][j + 1];
			} else {
				table[i][j] = Math.max(table[i][j + 1], table[i + 1][j]);
			}
		}
	}
	return table;
}

function findChangeWithTable(table, before, after) {
	const result = [];
	const matched = [];
	const added = [];
	const deleted = [];
	let i = 0,
		j = 0;
	while (i < after.length && j < before.length) {
		if (after[i] === before[j]) {
			result.push(`${after[i]} is matched`);
			matched.push(i);
			++i;
			++j;
		} else if (table[i][j + 1] > table[i + 1][j]) {
			result.push(`${before[j]} is deleted`);
			deleted.push(j);
			++j;
		} else {
			result.push(`${after[i]} is added`);
			added.push(i);
			++i;
		}
	}

	while (i < after.length) {
		added.push(i);
		result.push(`${after[i++]} is added`);
	}

	while (j < before.length) {
		deleted.push(j);
		result.push(`${before[j++]} is deleted`);
	}

	return { matched, added, deleted, result };
}

export default function findChange(before, after) {
	const table = LCATable(before, after);
	return findChangeWithTable(table, before, after);
}

// console.log(findChange("What's good?".split(" "), "What is good?".split(" ")));

// console.log(
// 	findChange("What's good?".split(" "), "What's is good?".split(" "))
// );

// console.log(
// 	findChange(
// 		"The sun will rise again".split(" "),
// 		"The moon will rise again?".split(" ")
// 	)
// );
