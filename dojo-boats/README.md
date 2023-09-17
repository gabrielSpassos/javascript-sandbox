# The Puzzling Problem of the Perilous Passage

## Problem Description

In a quaint coastal town not far from London, the legendary detective Sherlock Holmes and his trusted companion Dr. Watson are faced with a mind-bending mystery. The town has been plagued by a string of puzzling boat disappearances, putting the local authorities in a tight spot.

Holmes soon finds out that these boats have been used to ferry people across a particularly dangerous stretch of water. To add a layer of complexity, the town has an infinite supply of boats, each with its own weight limit.

Your task is to emulate the great detective and find the minimum number of boats required to safely transport all passengers across the perilous waters.

### Constraints

- Each boat can carry no more than two people at a time.
- The combined weight of the passengers must not exceed the weight limit of the boat.
- No people weights more than the boat can carry.

## Inputs

- An array `people` representing the weight of each passenger.
- A number `limit` representing the weight limit of each boat.

## Output

- A number representing the minimum number of boats required to get all the passengers safely to the other side.

## Example

### Input

```javascript
const people = [70, 50, 80, 50];
const limit = 100;
```

### Output

```javascript
3
```

## Challenge Requirements

1. Use JavaScript to solve the problem.

## Solution

1. initialize var for number of boats used
2. initialize var for people on boat
3. initialize var for travelled indexes
4. create a loop people
5. if travelled[i] skip
6. boat++
7. create a buffer for the position weight
8. create a loop people j = i + 1
9. if travelled[j] skip
10. create a variable sumedWeight = people[i] + people[j]
11. if sumedWeight is <= limit
   1. set travelled[i] and travelled[j] as true
12. return boat