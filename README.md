## Installation

```bash
$ npm i
```

## Running unit tests
```bash
$ npm run test
```

## Using
Look at the example in src/app.ts
```ts
  // Define filters to use for filtering out or modifying ContentItems based on upstream level or options.
  // the order of rules matter
  const filter = new ContentTypeFilter();
  filter
    .setNext(new FormatTypeFilter())
    .setNext(new IsLockedFilter())
    .setNext(new AvailabilityFilter())
    .setNext(new PublishFieldsFilter());

  // Define rules to set isAvailable flag
  // the order doesn't matter
  const combineRule = new CombineRule([
    new AvailabilityRule(),
    new PublishStartRule(),
    new PublishEndRule(),
  ]);

  const availabilityCalc = new AvailabilityCalc(filter, combineRule);

  // set now, it is used in PublishStartRule and PublishEndRule
  const now = new Date().toISOString();

  return availabilityCalc.getContentAvailability(
    inputData,
    now
  );
```

## TODO
- sort levels by hierarchy before applying filters
- add data validation
