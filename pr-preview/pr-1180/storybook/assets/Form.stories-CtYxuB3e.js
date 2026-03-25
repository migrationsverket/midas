import{j as e}from"./iframe-CH21sBFo.js";import{c}from"./Form-CVljI_fE.js";import{G as d}from"./Grid-CRaqYA_5.js";import{G as i}from"./GridItem-BmtkvEnq.js";import{a as x,R as u}from"./Radio-BxfCl-MC.js";import{C as I}from"./CheckboxGroup-Dq9QZ07i.js";import{C as G}from"./Checkbox-oCdkhzl9.js";import{T as t}from"./TextField-BjFHvrwx.js";import{S as l}from"./Select-B8RIZALB.js";import{L as p}from"./ListBoxItem-xGU6ehKl.js";import{B as a}from"./Button-DAqWGZgG.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DLE_Hwk5.js";import"./utils-BTsYysht.js";import"./clsx-B-dksMZM.js";import"./index-BSkkjiWB.js";import"./index-BSEruQCs.js";import"./clsx-Ciqy0D92.js";import"./Group-BkO6iFKp.js";import"./FieldError-27wmxIep.js";import"./Text-BvEBpsjb.js";import"./Text-irla2VTm.js";import"./Button-Cyld21y_.js";import"./Hidden-BZUBqXYz.js";import"./useLabels-dAMIXjYB.js";import"./useButton-B_byaW6S.js";import"./SelectionIndicator-DQXVG8Dk.js";import"./useField-D98AzuON.js";import"./VisuallyHidden-BbJs2R-u.js";import"./useControlledState-BSIuYOQP.js";import"./Label-B6l4E3Qb.js";import"./Dialog-CQ7FpZ0p.js";import"./RSPContexts-kvxCI0gF.js";import"./OverlayArrow-DXDnGS1w.js";import"./useResizeObserver-BYnbHVpd.js";import"./Collection-Cv8r9qAi.js";import"./index-CqPeTyvA.js";import"./Separator-BknOFeGR.js";import"./SelectionManager-DqQLiQaF.js";import"./useEvent-B6n2-V8U.js";import"./scrollIntoView-By99Ab3d.js";import"./useDescription-B4sJiGX5.js";import"./ListKeyboardDelegate-DkHv3-VU.js";import"./PressResponder-Bo1gKqy7.js";import"./useLocalizedStringFormatter-DawUslhI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMXONQ0x.js";import"./getScrollParent-DE7toX-r.js";import"./x-BvM5og85.js";import"./createLucideIcon-BCbaEzrv.js";import"./useLocalizedStringFormatter-CoUJdwyc.js";import"./Heading-BUbmqlpx.js";import"./info-DBi6sA9C.js";import"./Popover-CWx6x2q9.js";import"./check-DZxmfyQr.js";import"./useToggleState-DxOUI8X3.js";import"./TextFieldBase-rYs0i8Pt.js";import"./Input-C0xGllCq.js";import"./useTextField-RMARdNiJ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DDkrW0y0.js";import"./DragAndDrop-add0QyQX.js";import"./inertValue-tbelthcN.js";import"./useListState-r-wxS_YX.js";import"./TagGroup-CqSCTyV5.js";import"./useHighlightSelectionDescription-DGDi87g6.js";import"./useUpdateEffect-UXW7fNt2.js";import"./useHasTabbableChild-CdaVl1MM.js";import"./chevron-down-D9oEHJLK.js";import"./Virtualizer-CtFeK3s7.js";import"./Button.module-BB7N-cLd.js";const Ve={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
