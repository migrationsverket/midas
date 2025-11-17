import{j as e}from"./iframe-BGJKVmf3.js";import{$ as c}from"./Form-GVS1P4LC.js";import{G as d}from"./Grid-C3TENiT1.js";import{G as i}from"./GridItem-BxMBcK5L.js";import{T as t}from"./TextField-Gw4cK1w5.js";import{S as l}from"./Select-DIFjBCWM.js";import{B as a}from"./Button-BoJn9f0V.js";import{R as x,a as u}from"./Radio-CGZ2T4j2.js";import{C as I}from"./CheckboxGroup-WrClXp9S.js";import{C as G}from"./Checkbox-Dfk4aXSS.js";import{L as p}from"./ListBoxItem-B_7qJdZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CdECfOvA.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dnh4rJxq.js";import"./useFocusRing-DbrozJ_r.js";import"./index-pedBBgRE.js";import"./index-DRo8smSM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-kjdUuLdR.js";import"./TextField-D76GYiLD.js";import"./FieldError-Cw7h0kNs.js";import"./Text-r6BcnIdd.js";import"./Text-Bp3BbsoJ.js";import"./RSPContexts-B4x9M34g.js";import"./Group-C0VflcHe.js";import"./Input-DFAnnGOU.js";import"./Hidden-HQtC_o9a.js";import"./Button-BnLvJykT.js";import"./useLabels-DjNPyrwJ.js";import"./useButton-H76zVe9p.js";import"./useTextField-zh_BSZRZ.js";import"./useControlledState-CKSdrHFO.js";import"./useField-CwvTQ404.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-WTBSOLOM.js";import"./Dialog-BkzjdUPZ.js";import"./OverlayArrow-CEhGYxVs.js";import"./useResizeObserver-U2HW7D5b.js";import"./Collection-BLiFri7p.js";import"./index-CXAwwT1a.js";import"./Separator-DJ3CyE4J.js";import"./SelectionManager-DLKSBW41.js";import"./useEvent-USaeSmTd.js";import"./scrollIntoView-Da0pxFKj.js";import"./SelectionIndicator-Dv9tLt5C.js";import"./useDescription-DXkPEcT2.js";import"./ListKeyboardDelegate-D0u_GLeO.js";import"./PressResponder--ZsFu1sS.js";import"./useLocalizedStringFormatter-DpbFwMiK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DfHGa-5w.js";import"./VisuallyHidden-G7JBO7ul.js";import"./x-CgSSs-72.js";import"./createLucideIcon-Bvs4zFUu.js";import"./useLocalizedStringFormatter-DljgyLYu.js";import"./Heading-DFG0pOTb.js";import"./info-Bsp46QLb.js";import"./Popover-BiIV6MRI.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-COlw0O4l.js";import"./DragAndDrop-DsvHTkfR.js";import"./inertValue-pgxmI0nf.js";import"./useListState-DHX5qW2X.js";import"./Tag-BbfH7a8P.js";import"./useHighlightSelectionDescription-CSjdsMAw.js";import"./useUpdateEffect-Clot3fOt.js";import"./useHasTabbableChild-Bg2QNLap.js";import"./chevron-down-MgwSeKso.js";import"./Button.module-CtQ1deO8.js";import"./check-DIG5wB79.js";import"./useToggleState-Bn_Pr9Qx.js";import"./Virtualizer-svX_XWe4.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
