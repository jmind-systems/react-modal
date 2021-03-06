# React-Modal
**[aphrodite](https://www.npmjs.com/package/aphrodite) is required for react-modal to work**
### Example
[codesandbox](https://codesandbox.io/s/brave-austin-u81bv?file=/src/App.js)
## Docs

- **addModal** - takes a modal name. Use to open modal.
- **removeModal** - takes a modal name. Use to close modal.
- **subscribeToModal**: (name, callback: (isOpen)) - callback will be trigger on modal open/close 
- **name**: string - The modal name should be unique
- **children**: ReactNode - modal content
- **type**: string: submit, confirm, custom
- **onClose**?: function
- **onSubmit**?: function - will be triggered when the user clicks on submit button
- **settings**?: object - use this parameter to pass custom settings:
  1. rootStyles: object
  2. overlayStyles: object
  3. withCloseBtn: boolean (default true) - Using this prop you can show  
  or hide close btn (cross.svg)
  4. closeStyles: object
     1. svg: object - Use to change close btn position, size, etc.
     2. path: object - Use to change close button color
- **controlsSettings**?: object 
  1. cancel: object - cancel button settings.
     1. text: string | React.Element - cancel button text
     2. styles: object - styles for cancel button. Use this  
       parameter to change default button styles.
  2. submit: object - submit button settings
     1. text: string | React.Element - submit button text
     2. styles: object - styles for submit button. Use this  
               parameter to change default button styles.  
  3. wrapper: object - There is a parant div around cancel and submit buttons. 
     Use this parameter to change wrapper style (margin, background, etc.)   
- **closeIcon**?: function This prop can be used to pass custom close component, for example text.
- **portalId**?:string (default - modal) - By default you should have root div with id="modal" ().  
