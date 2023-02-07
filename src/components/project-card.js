import React from "react";
import { ReactComponent as FolderIcon } from "../images/folder.svg";

function ProjectCard({
  description,
  icon: Icon = FolderIcon,
  link,
  stack,
  title,
}) {
  return (
    <a
      className="hover:float dark:bg-primary-300 dark:text-gray-200 font-bold inline-block p-10 rounded-lg text-sm w-2/6"
      href={link}
      rel="noreferrer"
      target={"_blank"}
    >
      <Icon className="mb-3" fill="white" />
      <h4 className="text-md mb-2">{title}</h4>
      <p className="font-normal text-gray-400 mb-3">{description}</p>
      <ul className="flex flex-wrap">
        {stack.map((technology) => (
          <li
            className="font-semibold mr-3 text-xs text-gray-500 dark:text-gray-400"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>
    </a>
  );
}

export default ProjectCard;
