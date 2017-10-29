# Readable app - overview
This app, while based on create-react-app, has been ejected to allow for minor webpack config.

## Overall structure
Standalone views or larger components are placed into the `continers` folder, while `components` contain all shared or non-standalone components.

## Comments on functionality

### Post and comment order
The user may cycle between ordering by tapping the sort button placed above each list. This will cycle all available order selections as a one-directional stepped cycle.

Defaut order is by votes.

### Filter by category
The user may filter posts by tapping the category icon to the upper left of the post list screen. This will expand a drawer from which to choose a category.

## Components and modules
In addition to custom built, components, the application derives on the following components:
- **React Foundation:** CSS framework, derived from Fondation Sites to offer React coponent based grid system. 
- **React Dates:** Airbnb date picker.
- **Moment:** Date handler component.

## Thougts architecural improvements.
I considered implementing both a ducks strategy to actions/reducers and also reselect however it seemed out of bounds of the assignment.
