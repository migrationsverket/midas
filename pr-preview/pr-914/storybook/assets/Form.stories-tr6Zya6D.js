import{j as e}from"./iframe-CxZjhegp.js";import{$ as c}from"./Form-TS4hpq6u.js";import{G as d}from"./Grid-BpPQitLd.js";import{G as i}from"./GridItem-f7fbd-H6.js";import{T as t}from"./TextField-BjI64Us3.js";import{S as l}from"./Select-B3zmMtGO.js";import{B as a}from"./Button-DmCxpU9a.js";import{R as x,a as u}from"./Radio-negHCBPP.js";import{C as I}from"./CheckboxGroup-yPyWm6yv.js";import{C as G}from"./Checkbox-CL5me0w0.js";import{L as p}from"./ListBoxItem-B9DO0Ll-.js";import"./preload-helper-Ct5FWWRu.js";import"./utils-t_UvxsPo.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DTcyk69g.js";import"./useFocusRing-CuAhJjMk.js";import"./index-Df8cI5Fd.js";import"./index-BpV2s7Sq.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D9weRXN6.js";import"./FieldError-BnSMhr-e.js";import"./Text-BxKbXzcf.js";import"./Text-BO0XgLDT.js";import"./RSPContexts-DTcZWwa3.js";import"./Group-CuFZOCRz.js";import"./Input-BENrIFZm.js";import"./Hidden-CwZ-5pz7.js";import"./Button-DTaXrG8H.js";import"./useLabels-DYf1S3Mk.js";import"./useButton-D6P1u6Z6.js";import"./useTextField-C_ethhwO.js";import"./useControlledState-1MfuKuam.js";import"./useField-B0rwbLOa.js";import"./TextField.module-DGUQcbB9.js";import"./Label-DhCLB0Dv.js";import"./Dialog-CjYQPizy.js";import"./OverlayArrow-DrSy-WII.js";import"./useResizeObserver-DZzFLSdN.js";import"./Collection-CafIcahF.js";import"./index-B5N5Dt5p.js";import"./Separator-AuCHvk97.js";import"./SelectionManager-oMxquwju.js";import"./useEvent-DWA2S5R6.js";import"./scrollIntoView-RMCpJVNW.js";import"./SelectionIndicator-BXZJR1xI.js";import"./useDescription-B-louMJX.js";import"./ListKeyboardDelegate-DrR1Bcbc.js";import"./PressResponder-DpgLzDIs.js";import"./useLocalizedStringFormatter-CFCh-lbJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-VbWZMWd3.js";import"./VisuallyHidden-C8ai3rtG.js";import"./useLocalizedStringFormatter-Bd44m9N7.js";import"./x-DyUBUrN6.js";import"./createLucideIcon-Wfv3XnU7.js";import"./Heading-yIWuvTWW.js";import"./info-Cep2xzFo.js";import"./Popover-Dzf1c64m.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox--l-XUhk2.js";import"./DragAndDrop-Cl_qCLR3.js";import"./inertValue-jwos7Qfg.js";import"./useListState-CO0e_3k1.js";import"./Tag-hi3Lg1V2.js";import"./useHighlightSelectionDescription-BbX6u0uY.js";import"./useUpdateEffect-8szR3EAI.js";import"./useHasTabbableChild-D3lRU9bK.js";import"./chevron-down-vwOYLuAD.js";import"./Button.module-CtQ1deO8.js";import"./check-CRPpb1jH.js";import"./useToggleState-CxjWSHgk.js";import"./Virtualizer-BD7GdF8o.js";const Ve={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Xe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Xe as __namedExportsOrder,Ve as default};
