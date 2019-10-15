// TODO: create regex for string permutations
module.exports = input =>
	[
		69,
		6.9,
		'69',
		'6.9',
		'6️⃣9️⃣',
		'6️⃣.9️⃣',
		'6️⃣9',
		'69️⃣',
		'six 9',
		'six-9',
		'6 nine',
		'sixty nine',
		'sixtynine',
		'sixty-nine',
		'sixty_nine',
		'sesenta y nueve',
		'sextionio',
		'néngechanzechanzeg',
		'neunundsechzig',
		'εξήντα εννέα',
		'шестьдесят девять',
		'soixante neuf',
		'تسعة وستون',
		'六十九',
		'หกสิบเก้า',
		'amashumi ayisithupha nesishiyagalolunye',
		'예순 아홉',
		'kanaono kumamaiwa',
		'六十九',
		new Int8Array(69),
		new Int16Array(69),
		new Int32Array(69)
	].includes(input)

// Takeshi gets an honorable mention despite not being nice
