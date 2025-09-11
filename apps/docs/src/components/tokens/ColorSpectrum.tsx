import {tokens} from '@midas-ds/theme'
export const ColorSpectrum = () => {
  const filteredColors = Object.entries(tokens.color).filter(
    ([colorName]) => !["black", "white", "blackHover", "whiteHover", "purple", "red"].includes(colorName)
  );

  const signalColors = filteredColors.filter(([colorName]) => colorName.startsWith('signal') && colorName !== 'signalRed');
  const nonSignalColors = filteredColors.filter(([colorName]) => !colorName.startsWith('signal') || colorName === 'signalRed');

  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap', marginBottom: '2rem' }}>
      {nonSignalColors.map(([colorName, colorShades]) => (
        <div key={colorName} style={{ flexBasis: '100%' }}>
          <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
            {Object.entries(colorShades).map(([shadeName, shadeValue]) => (
              <div
                key={shadeName}
                style={{
                  backgroundColor: shadeValue.$value,
                  width: 60,
                  height: 60,
                }}
              />
            ))}
          </div>
        </div>
      ))}
      <div style={{ flexBasis: '100%' }}>
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          {signalColors.map(([colorName, colorShades]) => (
            <>
              {Object.entries(colorShades).map(([shadeName, shadeValue]) => (
                <div
                  key={shadeName}
                  style={{
                    backgroundColor: shadeValue.$value,
                    width: 60,
                    height: 60,
                  }}
                />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

