import React from "react";
import useResources from './useResources';

// destructure resource from this.props (todos or posts)
const ResourceList = ({ resource }) => {
    const resources = useResources(resource);
  return (
    <div>
      Fetching {resource} ...
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </div>
  );
};

export default ResourceList;
