import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';
import PropsTable from './PropsTable';
import TypeSignature from './TypeSignature';
import type { ApiData, ComponentDoc } from '../../plugin/types';

export interface ApiDocBlockProps {
  /**
   * Component name to display documentation for
   */
  name: string;

  /**
   * Plugin ID (if using multiple instances)
   * @default 'default'
   */
  pluginId?: string;

  /**
   * Whether to show the type signature
   * @default true
   */
  showSignature?: boolean;

  /**
   * Whether to show the props table
   * @default true
   */
  showProps?: boolean;
}

/**
 * Main component for rendering API documentation from TypeDoc data
 */
export default function ApiDocBlock({
  name,
  pluginId = 'components',
  showSignature = true,
  showProps = true,
}: ApiDocBlockProps): JSX.Element {
  const globalData = useGlobalData();
  const pluginData = globalData['@midas-ds/docusaurus-typedoc-plugin']?.[pluginId] as { apiData: ApiData } | undefined;

  if (!pluginData?.apiData) {
    return (
      <div className="alert alert--danger" role="alert">
        <strong>Error:</strong> API documentation data not loaded. Make sure the
        TypeDoc plugin is configured correctly.
      </div>
    );
  }

  const component = pluginData.apiData.components[name];

  if (!component) {
    return (
      <div className="alert alert--warning" role="alert">
        <strong>Warning:</strong> Component "{name}" not found in API
        documentation. Available components:{' '}
        {Object.keys(pluginData.apiData.components).join(', ')}
      </div>
    );
  }

  return (
    <div className="api-doc-block">
      {component.description && (
        <div className="api-doc-description">
          <p>{component.description}</p>
        </div>
      )}

      {component.tags.deprecated && (
        <div className="alert alert--warning" role="alert">
          <strong>Deprecated:</strong> {component.tags.deprecated}
        </div>
      )}

      {showSignature && <TypeSignature component={component} />}

      {showProps && component.props.length > 0 && (
        <PropsTable props={component.props} />
      )}

      {component.tags.example && (
        <div className="api-doc-example">
          <h3>Example</h3>
          <pre>
            <code>{component.tags.example}</code>
          </pre>
        </div>
      )}

      {component.tags.see && (
        <div className="api-doc-see-also">
          <strong>See also:</strong> {component.tags.see}
        </div>
      )}
    </div>
  );
}
