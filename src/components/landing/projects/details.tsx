"use client";

import { ProjectType } from '@/lib/types/project';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Details = ({ project }: { project: ProjectType }) => {
  // Prepare an array of detail entries, filtering out empty values
  const details = [
    { header: 'Client', label: project.client },
    { header: 'Location', label: project.location },
    { header: 'Status', label: project.status },
    { header: 'Year', label: project.year ? String(project.year) : undefined },
  ].filter(({ label }) => label && label.trim() !== '');

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, stagger: 0.25 }}
    >
      <div className="text-left w-full space-y-2">
        {details.map(({ header, label }, index) => (
          <DetailLabel
            key={header}
            header={header}
            label={label}
            noBorder={index === 0} // only first item no border
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Details;

const DetailLabel = ({
  header,
  label,
  noBorder = false,
}: {
  header: string;
  label?: string;
  noBorder?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex items-start justify-between space-y-1 w-full pt-1',
        noBorder ? 'border-none' : 'border-t border-gray-200' // add border color for clarity
      )}
    >
      <p className="uppercase w-full text-left font-normal text-secondary-text">
        {header}
      </p>
      <p className="font-light w-full items-start flex text-secondary-text text-left">
        {label ?? ''}
      </p>
    </div>
  );
};
