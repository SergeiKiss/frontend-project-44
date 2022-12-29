install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	brain-even

brain-calc:
	brain-calc

brain-gcd:
	brain-gcd

brain-progression:
	brain-progression

brain-prime:
	brain-prime
