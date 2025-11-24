import React, { useMemo } from 'react';
import type { PropDoc } from '../../plugin/types';

export interface PropsTableProps {
  props: PropDoc[];
  /**
   * Whether to group props by category (regular, events, accessibility)
   * @default true
   */
  groupByCategory?: boolean;
}

interface PropGroup {
  title: string;
  props: PropDoc[];
}

/**
 * Renders a table of component props with grouping support
 */
export default function PropsTable({
  props,
  groupByCategory = true,
}: PropsTableProps): JSX.Element {
  const groupedProps = useMemo(() => {
    if (!groupByCategory) {
      return [{ title: 'Props', props }];
    }

    const groups: PropGroup[] = [];
    const regular: PropDoc[] = [];
    const events: PropDoc[] = [];
    const accessibility: PropDoc[] = [];

    for (const prop of props) {
      if (prop.name.startsWith('on')) {
        events.push(prop);
      } else if (prop.name.startsWith('aria-')) {
        accessibility.push(prop);
      } else {
        regular.push(prop);
      }
    }

    if (regular.length > 0) {
      groups.push({ title: 'Props', props: regular });
    }
    if (events.length > 0) {
      groups.push({ title: 'Events', props: events });
    }
    if (accessibility.length > 0) {
      groups.push({ title: 'Accessibility', props: accessibility });
    }

    return groups;
  }, [props, groupByCategory]);

  if (props.length === 0) {
    return <p>No props documented.</p>;
  }

  return (
    <div className="api-props-table">
      {groupedProps.map((group) => (
        <div key={group.title} className="props-group">
          <h3>{group.title}</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {group.props.map((prop) => (
                <tr key={prop.name}>
                  <td>
                    <code className="prop-name">
                      {prop.name}
                      {prop.required && (
                        <span className="required-indicator" title="Required">
                          *
                        </span>
                      )}
                    </code>
                    {prop.parent && (
                      <div className="prop-parent" title={`Inherited from ${prop.parent}`}>
                        <small>from {prop.parent}</small>
                      </div>
                    )}
                  </td>
                  <td>
                    <code className="prop-type">{prop.type}</code>
                  </td>
                  <td>
                    {prop.defaultValue ? (
                      <code className="prop-default">{prop.defaultValue}</code>
                    ) : (
                      <span className="prop-no-default">—</span>
                    )}
                  </td>
                  <td>
                    <div className="prop-description">
                      {prop.description || <em>No description</em>}
                    </div>
                    {prop.tags.deprecated && (
                      <div className="prop-deprecated">
                        <strong>Deprecated:</strong> {prop.tags.deprecated}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <style jsx>{`
        .api-props-table {
          margin: 2rem 0;
        }

        .props-group {
          margin-bottom: 2rem;
        }

        .props-group h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1rem;
        }

        th {
          text-align: left;
          padding: 0.75rem;
          background-color: var(--ifm-table-head-background);
          border-bottom: 2px solid var(--ifm-table-border-color);
          font-weight: 600;
        }

        td {
          padding: 0.75rem;
          border-bottom: 1px solid var(--ifm-table-border-color);
          vertical-align: top;
        }

        .prop-name {
          font-weight: 600;
          color: var(--ifm-color-primary);
        }

        .required-indicator {
          color: var(--ifm-color-danger);
          margin-left: 0.25rem;
        }

        .prop-parent {
          margin-top: 0.25rem;
          color: var(--ifm-color-secondary);
        }

        .prop-type {
          color: var(--ifm-code-color);
          background-color: var(--ifm-code-background);
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-size: 0.875rem;
          word-break: break-word;
        }

        .prop-default {
          color: var(--ifm-color-success);
        }

        .prop-no-default {
          color: var(--ifm-color-secondary);
        }

        .prop-description {
          line-height: 1.5;
        }

        .prop-deprecated {
          margin-top: 0.5rem;
          padding: 0.5rem;
          background-color: var(--ifm-color-warning-contrast-background);
          border-left: 3px solid var(--ifm-color-warning);
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}
