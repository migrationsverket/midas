import{j as e}from"./iframe-DbRIiPJf.js";import{c}from"./Form-DKNQStX3.js";import{G as d}from"./Grid-CG2dtjDj.js";import{G as i}from"./GridItem-D8_IbJBH.js";import{a as x,R as u}from"./Radio-3gu2kViX.js";import{C as I}from"./CheckboxGroup-CafdVeu6.js";import{C as G}from"./Checkbox-vmj-6u_8.js";import{T as t}from"./TextField-DNIaPRlZ.js";import{S as l}from"./Select-X2PTt6bX.js";import{L as p}from"./ListBoxItem-_ZJvtpPa.js";import{B as a}from"./Button-ClLfQI_I.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CzsT9eqz.js";import"./utils-CylrHtqj.js";import"./clsx-B-dksMZM.js";import"./index-CWx_6wJr.js";import"./index-CYF8mrWB.js";import"./clsx-Ciqy0D92.js";import"./Group-C_ZA0uHw.js";import"./FieldError-BlTKrD9e.js";import"./Text-Bl7omTF2.js";import"./Text-BWzS2USX.js";import"./Button-Bu-vq5J8.js";import"./Hidden-CLmG6Qjv.js";import"./useLabel-D5V8M1AU.js";import"./useLabels-CWkCWE-a.js";import"./useButton-ydqzzVJH.js";import"./SelectionIndicator-D8qE1ns6.js";import"./useField-Dc--rdEY.js";import"./VisuallyHidden-OjEI7nCv.js";import"./useControlledState-CkgwQtqz.js";import"./Label-B0PLsM6Z.js";import"./Dialog-D_2eTWHX.js";import"./RSPContexts-RxxWGpWl.js";import"./OverlayArrow-Cdun6Sbd.js";import"./useResizeObserver-CSdE0Caq.js";import"./Collection-B4ubqx70.js";import"./index-BZFoeM-h.js";import"./Separator-D4uDxJfh.js";import"./SelectionManager-DTAr5YEZ.js";import"./useEvent-BDJFflUb.js";import"./scrollIntoView-DyOkJKzq.js";import"./useDescription-o_hCOQgG.js";import"./ListKeyboardDelegate-B3d6mxcZ.js";import"./PressResponder-DBZgubCT.js";import"./useLocalizedStringFormatter-BhEsaq13.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BgBqCX5B.js";import"./getScrollParent-B52noiPs.js";import"./Dialog-CBm6AzQl.js";import"./x-gq1nGzx6.js";import"./createLucideIcon-DWTxx8ko.js";import"./useLocalizedStringFormatter-Bz5dx8x0.js";import"./Heading-VhFSBXsH.js";import"./info-BYtc9nMD.js";import"./Popover-C6o3sMeS.js";import"./check-BY0PAhTl.js";import"./useToggleState-Cf2LHE29.js";import"./TextFieldBase-DcjElkhJ.js";import"./Input-DBUD3kdX.js";import"./useTextField-Fl3Oq0YZ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Rlip6tEk.js";import"./DragAndDrop-DLngMwvt.js";import"./inertValue-BW7Omm3R.js";import"./useListState-D1XPQNjr.js";import"./TagGroup-D62lWSv0.js";import"./useHighlightSelectionDescription-CebLorEz.js";import"./useUpdateEffect-CH9ts1gJ.js";import"./useHasTabbableChild-D-H3w-s2.js";import"./chevron-down-CBHdhi_4.js";import"./Virtualizer-vxpT8pep.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
