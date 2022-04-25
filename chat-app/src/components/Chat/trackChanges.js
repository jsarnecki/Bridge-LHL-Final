// const trackChanges = (old, s) => {
// 	old = old.split(" ");
// 	s = s.split(" ");

// 	let same = [];
// 	let diff = [];
// 	let i = 0;
// 	let j = 0;
// 	while (true) {
// 		if (old[i] === s[j]) {
// 			same.push(old[i]);
// 			i++;
// 			j++;
// 		}
// 		if (old[i] !== s[j]) {
// 			diff.push([old[i]]);
// 		}
// 	}
// };

// console.log(trackChanges("What's good?", "What is good?"));
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
		result.push(`${after[i++]} is added`);
		added.push(i);
	}

	while (j < before.length) {
		result.push(`${before[j++]} is deleted`);
		deleted.push(j);
	}

	return { matched, added, deleted, result };
	// return result;
}

export default function findChange(before, after) {
	const table = LCATable(before, after);
	return findChangeWithTable(table, before, after);
}

console.log(findChange("What's good?".split(" "), "What is good?".split(" ")));

console.log(
	findChange("What's good?".split(" "), "What's is good?".split(" "))
);
