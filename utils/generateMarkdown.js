function generateMarkdown(data) {
  return `# ${data.project_name} 
  ## a project coded by ${data.username}
  #### What's this thing do?
  > ${data.description}
  #### How do we install it?
  > ${data.install}
  #### How do we use it?
  > ${data.usage}
  ##### Reach out to me!
  > You can email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
