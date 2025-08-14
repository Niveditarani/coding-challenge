# coding-challenge
React Coding challenge-1

## Creating Chips Input
# ImportanT JavaScript concepts in this code-
1. ES6+ Features

    Arrow functions (const handleKeyDown = (e) => {}) → used for concise function syntax and lexical this.
    Array spread operator ([...prev, trimmed]) → creates a new array without mutating the old one (immutability).
    Array .filter() (prev.filter((_, i) => i !== index)) → used for removing a specific chip.
    Template literals (`${chip}-${index}`) → useful for unique key values in lists.
    Destructuring in function params (e.g., (prev) => [...prev, trimmed]) → shorthand for working with previous state.
    TypeScript Generics (useState<string[]>([])) → enforces array of strings.

2. Event Handling in JS

    Event objects (e: React.ChangeEvent<HTMLInputElement>) → accessing e.target.value.
    Keyboard event handling (e.key === "Enter") → controlling behavior based on key presses.
    e.preventDefault() → prevents default form submission when pressing Enter.

3. String Manipulation

    .trim() → prevents empty or whitespace-only chips from being added.

4. Functional Programming

    Pure functions for updating state (no mutation).
    Higher-order functions like .map() and .filter().

## React concepts in this code

1. State Management with Hooks

    useState for both primitive (string) and complex (string[]) state.
    Using the functional form of setState:
      setChips(prev => [...prev, trimmed]);
    This is important when new state depends on previous state.

2. Controlled Components

    Input’s value is bound to input state, and changes are handled via onChange.
    This ensures React has the single source of truth for the input value.

3. List Rendering

    .map() to render chips dynamically.
    The importance of key props in lists to help React optimize rendering.

4. Event Handling in JSX

    Inline event handlers:

    onClick={() => removeChip(index)}
    Passing arguments through arrow functions.

5. Conditional Logic for UI Updates

    Adding a chip only if trimmed is non-empty.
    Avoiding duplicates by keeping each chip’s removal independent.

6. JSX + Tailwind CSS

    Combining JSX structure with Tailwind utility classes for styling.
    Understanding how className works in React vs HTML.

7. Component Organization

    Clear separation of header, input box, and chip list.
    Stateless rendering of UI based on state.

## Common Interview Questions Based on This Code
Q: Why do we use [...prev, trimmed] instead of prev.push(trimmed)?
A: prev.push() mutates the original array, breaking React’s state change detection. The spread operator creates a new array reference, triggering a re-render.

Q: What happens if you forget the key prop in .map()?
A: React may re-use DOM nodes incorrectly, causing UI bugs (especially in input-heavy lists) and reducing performance.

Q: When do you use the functional form of setState?
A: When the new state depends on the previous state value — it ensures we use the latest state.

Q: What does useState<string[]>([]) mean?
A: It’s a generic type annotation telling TypeScript that chips will always be an array of strings.

Q: How could we prevent duplicate chips?
A: Add a condition before updating state:

      if (!chips.includes(trimmed)) {
        setChips(prev => [...prev, trimmed]);
      }

