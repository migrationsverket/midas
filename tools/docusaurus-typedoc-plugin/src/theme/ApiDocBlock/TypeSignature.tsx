import React from 'react';
import type { ComponentDoc } from '../../plugin/types';

export interface TypeSignatureProps {
  component: ComponentDoc;
}

/**
 * Renders the type signature of a component
 */
export default function TypeSignature({
  component,
}: TypeSignatureProps): JSX.Element {
  return (
    <div className="type-signature">
      <h3>Type Signature</h3>
      <pre>
        <code>{component.signature}</code>
      </pre>

      {component.typeParameters && component.typeParameters.length > 0 && (
        <div className="type-parameters">
          <h4>Type Parameters</h4>
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Constraint</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {component.typeParameters.map((tp) => (
                <tr key={tp.name}>
                  <td>
                    <code>{tp.name}</code>
                  </td>
                  <td>
                    {tp.constraint ? <code>{tp.constraint}</code> : '—'}
                  </td>
                  <td>{tp.default ? <code>{tp.default}</code> : '—'}</td>
                  <td>{tp.description || <em>No description</em>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style jsx>{`
        .type-signature {
          margin: 2rem 0;
        }

        .type-signature h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .type-signature pre {
          background-color: var(--ifm-code-background);
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
        }

        .type-signature code {
          color: var(--ifm-code-color);
          font-family: var(--ifm-font-family-monospace);
        }

        .type-parameters {
          margin-top: 1.5rem;
        }

        .type-parameters h4 {
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }

        .type-parameters table {
          width: 100%;
          border-collapse: collapse;
        }

        .type-parameters th {
          text-align: left;
          padding: 0.75rem;
          background-color: var(--ifm-table-head-background);
          border-bottom: 2px solid var(--ifm-table-border-color);
          font-weight: 600;
        }

        .type-parameters td {
          padding: 0.75rem;
          border-bottom: 1px solid var(--ifm-table-border-color);
          vertical-align: top;
        }

        .type-parameters code {
          background-color: var(--ifm-code-background);
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
